import { useEffect, useMemo, useState } from 'react'

import { ETestStatus, getSitesAllSlice, getTestsAllSlice } from '@entities'
import RenderTestButton from '@features/render-test-button'

import { debounce } from '@shared/utils/debounce'

import { formatSites } from '@pages/main/presenter/helpers'

import type { ITableColumn } from '@shared/ui/components/table/interface'
import type { ITestTableItem } from '@entities'
import type { ChangeEvent } from 'react'

interface IUseMainPagePresenterReturn {
  tests: ITestTableItem[]
  columns: ITableColumn<ITestTableItem>[]
  filterValue: string
  sortKey: keyof ITestTableItem | null
  sortDirection: 'asc' | 'desc' | null
  handleChangeFilterValue(e: ChangeEvent<HTMLInputElement>): void
  handleResetFilterValue(): void
  handleSort(key: keyof ITestTableItem): void
}

const columns: ITableColumn<ITestTableItem>[] = [
  { key: 'name', header: 'NAME' },
  { key: 'type', header: 'TYPE' },
  { key: 'status', header: 'STATUS' },
  { key: 'site', header: 'SITE' },
  { key: 'action', render: RenderTestButton }
]

const useMainPagePresenter = (): IUseMainPagePresenterReturn => {
  const [tests, setTests] = useState<ITestTableItem[]>([])
  const [filterValue, setFilterValue] = useState<string>('')
  const [filterValueDebounce, setFilterValueDebounce] = useState<string>('')
  const [sortKey, setSortKey] = useState<keyof ITestTableItem | null>(null)
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(null)

  const handleChangeFilterValueDebounce = debounce(() => {
    setFilterValueDebounce(filterValue)
  })

  const handleChangeFilterValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)

    handleChangeFilterValueDebounce()
  }

  const handleResetFilterValue = (): void => {
    setFilterValue('')
  }

  const handleSort = (key: ITableColumn<ITestTableItem>['key']): void => {
    if (key === 'action') return
    if (sortKey === key) {
      setSortDirection((prev) => prev === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortDirection('asc')
    }
  }

  const filteredTests = useMemo(() => {
    return tests.filter((item) => item.name.toLowerCase().includes(filterValueDebounce.toLowerCase()))
  }, [filterValueDebounce, tests])

  const sortedTests = useMemo(() => {
    if (!sortKey) return filteredTests

    return [...filteredTests].sort((a, b) => {
      if (sortKey === 'status') {
        const statusOrder = {
          [ETestStatus.ONLINE]: 1,
          [ETestStatus.PAUSED]: 2,
          [ETestStatus.STOPPED]: 3,
          [ETestStatus.DRAFT]: 4,
        }
        const aOrder = statusOrder[a.status]
        const bOrder = statusOrder[b.status]
        return sortDirection === 'asc' ? aOrder - bOrder : bOrder - aOrder
      }

      if (a[sortKey] < b[sortKey]) return sortDirection === 'asc' ? -1 : 1
      if (a[sortKey] > b[sortKey]) return sortDirection === 'asc' ? 1 : -1
      return 0
    })
  }, [filteredTests, sortKey, sortDirection])

  useEffect(() => {
    getTestsAllSlice().then((resTests) => {
      getSitesAllSlice().then((resSites) => {
        setTests(formatSites(resTests, resSites))
      }).catch((err) => {
        console.log(err)
      })
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  return {
    tests: sortedTests,
    columns,
    filterValue,
    sortKey,
    sortDirection,
    handleChangeFilterValue,
    handleResetFilterValue,
    handleSort,
  }
}

export { useMainPagePresenter }
