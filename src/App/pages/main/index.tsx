import Table from '@shared/ui/components/table'
import { useMainPagePresenter } from '@pages/main/presenter'
import FilterTestsInput from '@features/filter-test-input'
import NoResultsMessage from '@widgets/no-results-message'

import styles from './index.module.scss'

import type { ReactNode } from 'react'

const MainPage = (): ReactNode => {
  const {
    tests,
    columns,
    filterValue,
    sortKey,
    sortDirection,
    handleChangeFilterValue,
    handleResetFilterValue,
    handleSort,
  } = useMainPagePresenter()

  return (
    <div className={ styles.common }>
      <h1 className={ styles.common__title }>DASHBOARD</h1>

      <FilterTestsInput value={ filterValue } onChange={ handleChangeFilterValue } resultsQuantity={ tests.length } />

      { tests.length > 0
        ? (
          <Table
            data={ tests }
            columns={ columns }
            onSort={ handleSort }
            sortKey={ sortKey }
            sortDirection={ sortDirection }
          />
        )
        : <NoResultsMessage onReset={ handleResetFilterValue } className={ styles.common__message } /> }
    </div>
  )
}

export default MainPage
