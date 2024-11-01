import { generateLatvianID } from '../src/generateLatvianID'
test('Generate Latvian ID has correct prefix', () => {
  const id = generateLatvianID()
  expect(id.startsWith('LVA-')).toBe(true)
})
test('Generate Latvian ID has correct length', () => {
  const id = generateLatvianID()
  expect(id.length).toBe(8)
})
test('Generate Latvian ID format is correct', () => {
  const id = generateLatvianID()
  expect(/LVA-\d{4}/.test(id)).toBe(true)
})
