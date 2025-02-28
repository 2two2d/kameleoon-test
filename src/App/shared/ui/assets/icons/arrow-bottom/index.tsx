import type { ReactNode } from 'react'

import type { IIcon } from '@shared/interface'

const ArrowBottomIcon = ({ height = 4, width = 7, size = 1, ...props }: IIcon): ReactNode => (
  <svg width={ width * size }
    height={ height * size }
    viewBox="0 0 7 4"
    { ...props }
  >
    <path d="M0 0.49999L3.13529 3.635284L3.5 3.99999284744L3.86471 3.635284L7 0.49999L6.63529 0.13528L3.5 3.270576L0.364708 0.13528L0 0.49999Z" fill="#999999" />
  </svg>
)

export { ArrowBottomIcon }
