import { makeClassname } from '@shared/utils/make-classname'

import { isTruthy } from '@shared/utils/check-boolean'

import styles from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface IInputProps extends IDetailedProps<HTMLInputElement> {
  icon: ReactNode
  postText?: string
}

const Input = ({ icon, postText, className, ...props }: IInputProps): ReactNode => {
  return (
    <div className={ makeClassname(styles.common, className) }>
      <input className={ styles.common__input } { ...props } />

      { isTruthy(icon) && (
        <div className={ styles.common__icon }>
          { icon }
        </div>
      ) }

      { isTruthy(postText) && (
        <div className={ styles['common__post-text'] }>
          { postText }
        </div>
      ) }
    </div>
  )
}

export default Input
