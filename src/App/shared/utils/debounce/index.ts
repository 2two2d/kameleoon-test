const debounce = <T extends (
  ...args: never[]) => unknown> (
  func: T,
  delay: number = 500,
): (...args: Parameters<T>) => void => {
  let timeoutId: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>): void => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Устанавливаем новый таймер
    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

export { debounce }
