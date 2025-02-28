import type { ITestDto } from '@entities'

type ISortableField = keyof Pick<ITestDto, 'type' | 'name' | 'status' | 'siteId'>

const sortTests = (tests: ITestDto[], field: ISortableField): ITestDto[] => {
  return tests.slice().sort((a, b) => {
    const formatedA = a[field].toString().toLowerCase()
    const formatedB = b[field].toString().toLowerCase()

    if (formatedA === formatedB) return 0

    return formatedA < formatedB ? -1 : 1
  })
}

export { sortTests }
