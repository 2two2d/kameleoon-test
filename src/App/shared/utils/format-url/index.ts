const formatURL = (url: string): string => {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '')
}

export {
  formatURL
}
