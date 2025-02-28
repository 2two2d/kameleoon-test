import { ArrowBottomIcon, ArrowTopIcon, SearchIcon } from '@shared/ui/assets/icons'

const ICONS = {
  base: {
    search: <SearchIcon />,
  },
  arrows: {
    top: <ArrowTopIcon />,
    bottom: <ArrowBottomIcon />,
  }
} as const

export { ICONS }
