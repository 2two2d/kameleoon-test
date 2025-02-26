import type { IIcon } from '@shared/interface'

import type { ICONS } from '../state'

type IIconCategory = keyof typeof ICONS
type IIconName<C extends IIconCategory> = keyof (typeof ICONS)[C]
type IIconScale = 'width' | 'height' | 'size'

interface IIconSource<C extends IIconCategory> {
  category: C
  icon: IIconName<C>
}

interface IIconProps<C extends IIconCategory = IIconCategory> extends Omit<IIcon, IIconScale | 'scale'> {
  source: IIconSource<C>
  scale?: Pick<IIcon, IIconScale>
  title?: string
}

export type { IIconSource, IIconProps, IIconCategory, IIconScale, IIconName }
