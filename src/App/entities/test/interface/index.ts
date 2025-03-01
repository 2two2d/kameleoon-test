import type { ETestStatus, ETestType } from '@entities/test'

interface ITestDto {
  id: number
  name: string
  type: ETestType
  status: ETestStatus
  siteId: number
}

interface ITestTableItem extends Omit<ITestDto, 'siteId'> {
  site: string
  accentColor: string
}

export type { ITestDto, ITestTableItem }
