import type { ReactNode } from 'react'

import type { IIcon } from '@shared/interface'

const ArrowTopIcon = ({ height = 4, width = 7, size = 1, ...props }: IIcon): ReactNode => (
  <svg width={ width * size }
    height={ height * size }
    viewBox="0 0 7 4"
    { ...props }
  >
    <path d="M0 3.50001L3.13529 0.364716L3.5 7.15256e-06L3.86471 0.364716L7 3.50001L6.63529 3.86472L3.5 0.729424L0.364708 3.86472L0 3.50001Z" fill="#999999" />
  </svg>
)

export { ArrowTopIcon }
