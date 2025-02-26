import { makeClassname } from '@shared/utils/make-classname'

import { EButtonVariants } from '@shared/ui/components/button/enum'

import styles from './index.module.scss'

import type { IDetailedProps } from '@shared/interface'

import type { ReactNode } from 'react'

interface IButtonProps extends IDetailedProps<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset'
  variant?: EButtonVariants
}

const Button = ({ children, className, variant = EButtonVariants.PRIMARY, ...props }: IButtonProps): ReactNode => {
  return (
  // eslint-disable-next-line react/button-has-type
    <button className={ makeClassname(styles[variant], className) } { ...props }>
      { children }
    </button>
  )
}

export default Button

export { EButtonVariants }
