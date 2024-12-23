export class Processor {
  checkAgeConsent(age: number | null | undefined): boolean {
    if (age === null || age === undefined) return false;
    return age >= 18;
  }
}

