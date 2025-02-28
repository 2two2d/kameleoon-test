import Button, { EButtonVariants } from '@shared/ui/components/button'

import { ETestStatus } from '@entities'

import type { ReactNode } from 'react'

import type { ITestTableItem } from '@entities'

const RenderTestButton = ({ status }: ITestTableItem): ReactNode => {
  const isDraft = status === ETestStatus.DRAFT

  return (
    <Button variant={ isDraft ? EButtonVariants.SECONDARY : EButtonVariants.PRIMARY }>
      { isDraft ? 'Finalize' : 'Results' }
    </Button>
  )
}

export default RenderTestButton
