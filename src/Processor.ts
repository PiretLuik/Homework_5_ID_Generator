export class Processor {
  checkAgeConsent(age: number): boolean {
    return age >= 18;
  }

  revokeConsent(user: { consentGiven: boolean }) {
    user.consentGiven = false;
  }
}


test("User under 18 cannot give consent", () => {
  const processor = new Processor();
  const user = { age: 17 };
  expect(processor.checkAgeConsent(user.age)).toBe(false);
});

test("User 18 or older can give consent", () => {
  const processor = new Processor();
  const user = { age: 18 };
  expect(processor.checkAgeConsent(user.age)).toBe(true);
});

test("Revoke consent successfully", () => {
  const processor = new Processor();
  const user = { age: 20, consentGiven: true };
  processor.revokeConsent(user);
  expect(user.consentGiven).toBe(false);
});




