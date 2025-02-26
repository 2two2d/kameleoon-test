import type { DetailedHTMLProps, HTMLProps, SVGProps } from 'react'

type IDetailedProps<T> = DetailedHTMLProps<HTMLProps<T>, T>

interface IIcon extends Omit<SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: number
  height?: number
  width?: number
  color?: string
  secondColor?: string
  strokeColor?: string
}

export type {
  IDetailedProps,
  IIcon
}
