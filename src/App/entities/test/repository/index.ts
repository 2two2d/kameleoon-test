import { DEFAULT_API_URL } from '@settings/api'

import type { ITestDto } from '@entities'

const BASE_URL = DEFAULT_API_URL.concat('/test')

const getTestsAllSlice = async (): Promise<ITestDto[]> => {
  return fetch(BASE_URL).then(async (res) => res.json() as Promise<ITestDto[]>)
}

export {
  getTestsAllSlice
}
