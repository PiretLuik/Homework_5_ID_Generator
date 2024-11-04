import { Processor } from '../src/Processor'

describe('Processor', () => {
  const processor = new Processor()
  test('Returns true for age 18 and above', () => {
    expect(processor.checkAgeConsent(18)).toBe(true)
    expect(processor.checkAgeConsent(25)).toBe(true)

  })
  test('Returns false for age below 18', () => {
    expect(processor.checkAgeConsent(17)).toBe(false)
  })
})