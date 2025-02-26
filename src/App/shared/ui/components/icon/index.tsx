import { cloneElement, forwardRef } from 'react'

import { makeClassname } from '@shared/utils/make-classname'

import { isTruthy } from '@shared/utils/check-boolean'

import { ICONS } from './state'

import type { IIconCategory, IIconProps } from './interface'
import type { ReactElement, ReactNode, Ref } from 'react'

const IconRenderFunction = <C extends IIconCategory>(
  { source, title, scale, className, ...props }: IIconProps<C>,
  ref: Ref<HTMLSpanElement>
): ReactNode => {
  const { category, icon } = source
  const IconComponent = ICONS[category][icon] as ReactElement

  return (
    <span ref={ ref } className={ makeClassname('inline-flex items-center gap-2', className) }>
      { cloneElement(IconComponent, { ...scale, ...props }) }

      { isTruthy(title) && <span className="text-mm">{ title }</span> }
    </span>
  )
}

export const Icon = forwardRef(IconRenderFunction) as <C extends IIconCategory>(
  props: IIconProps<C> & { ref?: Ref<HTMLSpanElement> }
) => ReactNode
