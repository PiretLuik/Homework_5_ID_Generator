import { generateEstonianID } from '../src/generateEstonianID'
test('Generate Estonian ID has correct prefix', () => {
  const id = generateEstonianID()
  expect(id.startsWith('EST-')).toBe(true)
})
test('Generate Estonian ID has correct length', () => {
  const id = generateEstonianID()
  expect(id.length).toBe(8)
})
test('Generate Estonian ID format is correct', () => {
  const id = generateEstonianID()
  expect(/EST-\d{4}/.test(id)).toBe(true)
})
