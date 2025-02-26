import type { ETestStatus, ETestType } from '@entities/test'

interface ITestDto {
  id: number
  name: string
  type: ETestType
  status: ETestStatus
  siteId: number
}

export type { ITestDto }
