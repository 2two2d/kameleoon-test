import Button from '@shared/ui/components/button'

import { makeClassname } from '@shared/utils/make-classname'

import styles from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface INoResultsMessageProps extends IDetailedProps<HTMLDivElement> {
  message?: string
  btnMessage?: string

  onReset?(): void
}

const NoResultsMessage = ({
  message, btnMessage, onReset: handleReset, className, ...props
}: INoResultsMessageProps): ReactNode => {
  return (
    <div className={ makeClassname(styles.common, 'column', className) } { ...props }>
      <p className={ styles.message }>{ message ?? 'Your search did not match any results.' }</p>

      <Button onClick={ handleReset }>{ btnMessage ?? 'Reset' }</Button>
    </div>
  )
}

export default NoResultsMessage
