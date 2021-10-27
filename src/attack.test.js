import attack from './attack';

test('should return damage sentence when called correctly', () => {
  const result = attack('Smelly Orgy', 23);
  expect(result).toBe('Smelly Orgy dealt 23 damage!');
  expect(result).toMatch(/^Smelly Orgy(.*)23/);
  expect(result).toMatchInlineSnapshot('"Smelly Orgy dealt 23 damage!"');
});
