import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface ITableDataGenericExtender {
  id: string | number
}

interface ITableColumn<T> {
  key: keyof T | 'action'
  header?: ReactNode
  render?(item: T): ReactNode
}

interface ITableProps<T extends ITableDataGenericExtender> extends Omit<IDetailedProps<HTMLDivElement>, 'data'> {
  data: T[]
  columns: ITableColumn<T>[]
  sortKey?: keyof T | null
  sortDirection?: 'asc' | 'desc' | null
  onSort?(key: keyof T): void
}

export type {
  ITableColumn,
  ITableProps,
  ITableDataGenericExtender
}
