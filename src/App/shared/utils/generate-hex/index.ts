const getRandomHexColor = (): string => {
  const HEX_LENGTH = 6
  const HEX_CHARS = '0123456789ABCDEF'

  let color = '#'
  for (let i = 0; i < HEX_LENGTH; i++) {
    color += HEX_CHARS[Math.floor(Math.random() * HEX_CHARS.length)]
  }

  return color
}

export { getRandomHexColor }
