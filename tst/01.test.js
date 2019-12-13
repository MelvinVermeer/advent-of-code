const { calculateFuel } = require('../src/01-the-tyranny-of-the-rocket-equation');

describe('01 - The Tyranny of the Rocket Equation', () => {
  it('12 -> 2', () => {
    expect(calculateFuel(12)).toEqual(2);
  });
  it('14 -> 2', () => {
    expect(calculateFuel(14)).toEqual(2);
  });
  it('28 -> 7', () => {
    expect(calculateFuel(28)).toEqual(7);
  });
  it('60 -> 22', () => {
    expect(calculateFuel(60)).toEqual(22);
  });
  it('1969 -> 966', () => {
    expect(calculateFuel(1969)).toEqual(966);
  });
  it('100756 -> 50346', () => {
    expect(calculateFuel(100756)).toEqual(50346);
  });
});
