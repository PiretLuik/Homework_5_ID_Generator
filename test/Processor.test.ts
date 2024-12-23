import { Processor } from '../src/Processor';


describe('Processor', () => {
  const processor = new Processor();

  test('Returns true for age 18 and above', () => {
    expect(processor.checkAgeConsent(18)).toBe(true);
    expect(processor.checkAgeConsent(25)).toBe(true);
  });

  test('Returns false for age below 18', () => {
    expect(processor.checkAgeConsent(17)).toBe(false);
  });

  test('Returns false for negative age values', () => {
    expect(processor.checkAgeConsent(-1)).toBe(false);
  });

  test('Returns true for decimal age above 18', () => {
    expect(processor.checkAgeConsent(18.5)).toBe(true);
  });

  test('Returns false for decimal age below 18', () => {
    expect(processor.checkAgeConsent(17.9)).toBe(false);
  });

  test('Returns false for null or undefined age', () => {
    expect(processor.checkAgeConsent(null as any)).toBe(false);
    expect(processor.checkAgeConsent(undefined as any)).toBe(false);
  });
});

