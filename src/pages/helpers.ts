export const promptNumber = async (
  initial: number,
  callback: (result: number) => Promise<void>
) => {
  const input = window.prompt()
  const value = Number(input)
  if (!input || !Number.isInteger(value)) return

  if (input.startsWith("+") || input.startsWith("-")) {
    await callback(initial + value)
  } else {
    await callback(value)
  }
}
