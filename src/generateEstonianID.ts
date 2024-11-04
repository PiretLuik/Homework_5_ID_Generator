export function generateEstonianID(): string {
  const prefix = 'EST-'
  const randomNumber = Math.floor(1000 + Math.random() * 9000)
  return prefix + randomNumber.toString()
}
console.log(generateEstonianID())