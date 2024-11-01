import { generateLithunianID } from '../src/generateLithunianID'
test('Generate Lithunian ID has correct prefix', () => {
  const id = generateLithunianID()
  expect(id.startsWith('LTU-')).toBe(true)
})
test('Generate Lithunian ID has correct length', () => {
  const id = generateLithunianID()
  expect(id.length).toBe(8)
})
test('Generate Lithunian ID format is correct', () => {
  const id = generateLithunianID()
  expect(/LTU-\d{4}/.test(id)).toBe(true)
})
