export function generateLatvianID(): string {
  const prefix = 'LVA-'
  const randomNumber = Math.floor(1000 + Math.random() * 9000)
  return prefix + randomNumber.toString()
}
console.log(generateLatvianID())