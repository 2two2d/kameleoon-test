import { makeClassname } from '@shared/utils/make-classname'
import { isTruthy } from '@shared/utils/check-boolean'

import { Icon } from '@shared/ui/components/icon'

import styles from './index.module.scss'

import type { ITableDataGenericExtender, ITableProps } from '@shared/ui/components/table/interface'

import type { ReactNode } from 'react'

const Table = <T extends ITableDataGenericExtender>({
  data,
  columns,
  className,
  onSort,
  sortKey,
  sortDirection,
}: ITableProps<T>): ReactNode => {
  return (
    <table className={ makeClassname(styles.table, className) }>
      <thead>
        <tr className={ styles.table__header }>
          { columns.map((column) => {
            const handleClick = (): void => {
              if (column.key !== 'action') onSort?.(column.key)
            }

            return (
              <th
                key={ column.key.toString() }
                onClick={ handleClick }
              >
                <div>
                  { isTruthy(column.header) ? column.header : '' }

                  { sortKey === column.key && (
                    <Icon
                      source={{
                        category: 'arrows',
                        icon: sortDirection === 'asc' ? 'bottom' : 'top',
                      }}
                    />
                  ) }
                </div>
              </th>
            )
          }) }
        </tr>
      </thead>

      <tbody>
        { data.map((item) => (
          <tr key={ item.id } className={ styles.table__row }>
            { columns.map((column) => {
              const handleClick = (): void => {
                console.log('Button clicked:', item.id)
              }

              return (
                <td key={ column.key.toString() } style={{ borderColor: item.accentColor }}>
                  { column.key === 'action'
                    ? column.render
                      ? column.render(item)
                      : (
                        <button
                          className={ styles.table__button }
                          onClick={ handleClick }
                          type="button"
                        >
                          Action
                        </button>
                      )
                    : column.render
                      ? column.render(item)
                      : (
                        item[column.key] as ReactNode
                      ) }
                </td>
              )
            }) }
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default Table
