import { DEFAULT_API_URL } from '@settings/api'

import type { ISiteDto } from '@entities'

const BASE_URL = DEFAULT_API_URL.concat('/sites')

const getSitesAllSlice = async (): Promise<ISiteDto[]> => {
  return fetch(BASE_URL).then(async (res) => res.json() as Promise<ISiteDto[]>)
}

export {
  getSitesAllSlice
}
