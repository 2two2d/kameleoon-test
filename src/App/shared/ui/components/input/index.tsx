import { makeClassname } from '@shared/utils/make-classname'

import { isTruthy } from '@shared/utils/check-boolean'

import styles from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface IInputProps extends IDetailedProps<HTMLInputElement> {
  icon?: ReactNode
  postText?: string
}

const Input = ({ icon, postText, className, ...props }: IInputProps): ReactNode => {
  return (
    <div>
      <input className={ makeClassname(styles.common, className) } { ...props } />

      { isTruthy(icon) && (
        <div>
          { icon }
        </div>
      ) }

      { isTruthy(postText) && (
        <div>
          { postText }
        </div>
      ) }
    </div>
  )
}

export default Input
