const { calculateFuel, calculateFuelForMultipleModules } = require('../src/01');
const data = require('./01.data');

describe('01 - The Tyranny of the Rocket Equation', () => {
  it('12 -> 2', () => {
    expect(calculateFuel(12)).toEqual(2);
  });

  it('14 -> 2', () => {
    expect(calculateFuel(14)).toEqual(2);
  });

  it('1969 -> 654', () => {
    expect(calculateFuel(1969)).toEqual(654);
  });

  it('100756 -> 33583', () => {
    expect(calculateFuel(100756)).toEqual(33583);
  });

  it('[12,14] -> 4', () => {
    expect(calculateFuelForMultipleModules([12, 14])).toEqual(4);
  });

  it('aswer -> 3332538', () => {
    expect(calculateFuelForMultipleModules(data)).toEqual(3332538);
  });
});
