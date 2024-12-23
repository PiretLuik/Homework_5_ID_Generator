import { generateLithuanianID } from '../src/generateLithuanianID'
test('Generate Lithuanian ID has correct prefix', () => {
  const id = generateLithuanianID()
  expect(id.startsWith('LTU-')).toBe(true)
})
test('Generate Lithuanian ID has correct length', () => {
  const id = generateLithuanianID()
  expect(id.length).toBe(8)
})
test('Generate Lithuanian ID format is correct', () => {
  const id = generateLithuanianID()
  expect(/LTU-\d{4}/.test(id)).toBe(true)
})
