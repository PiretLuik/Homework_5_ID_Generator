export function generateLithunianID(): string {
  const prefix = 'LTU-'
  const randomNumber = Math.floor(1000 + Math.random() * 9000)
  return prefix + randomNumber.toString()
}
console.log(generateLithunianID())
