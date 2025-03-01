import { formatURL, getRandomHexColor } from '@shared/utils'

import type { ISiteDto, ITestDto, ITestTableItem } from '@entities'

interface IUniqSite {
  [key: string]: string
}

const formatSites = (tests: ITestDto[], sites: ISiteDto[]): ITestTableItem[] => {
  const uniqSites: IUniqSite = {}

  const testsWithFormatedSites = tests.map((testItem) => {
    return { ...testItem, site: formatURL(sites.find((siteItem) => siteItem.id === testItem.siteId)?.url ?? '') }
  })

  testsWithFormatedSites.forEach((item) => {
    if (!Object.keys(uniqSites).includes(item.site)) {
      uniqSites[item.site] = getRandomHexColor()
    }
  })

  return testsWithFormatedSites.map((item) => {
    return { ...item, accentColor: uniqSites[item.site] }
  })
}

export { formatSites }
