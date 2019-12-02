const { calculateFuelPlusExtra, calculateFuelForMultipleModules } = require('../src/01');
const data = require('./01.data');

describe('01 - The Tyranny of the Rocket Equation', () => {
  it('14 -> 2', () => {
    expect(calculateFuelPlusExtra(8)).toEqual(0);
  });

  it('100756 -> 50346', () => {
    expect(calculateFuelPlusExtra(100756)).toEqual(50346);
  });

  it('1969 -> 654', () => {
    expect(calculateFuelPlusExtra(1969)).toEqual(966);
  });

  it('aswer -> 4995942', () => {
    expect(calculateFuelForMultipleModules(data)).toEqual(4995942);
  });
});
