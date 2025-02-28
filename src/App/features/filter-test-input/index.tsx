import { useMemo } from 'react'

import Input from '@shared/ui/components/input'

import { Icon } from '@shared/ui/components/icon'

import type { BaseSyntheticEvent, ReactNode } from 'react'

interface IFilterTestInputProps {
  value: string
  resultsQuantity: number

  onChange(e: BaseSyntheticEvent): void
}

const FilterTestsInput = ({ resultsQuantity, ...props }: IFilterTestInputProps): ReactNode => {
  const icon = useMemo(() => {
    return <Icon source={{ category: 'base', icon: 'search' }} />
  }, [])

  return (
    <Input placeholder="What test are you looking for?"
      icon={ icon }
      postText={ `${resultsQuantity} test` }
      { ...props }
    />
  )
}

export default FilterTestsInput
