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

// At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper.
// They haven't determined the amount of fuel required yet.

// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass,
//  divide by three, round down, and subtract 2.

// For example:

// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4,
// so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.
// The Fuel Counter-Upper needs to know the total fuel requirement.
// To find it, individually calculate the fuel needed for the mass
// of each module (your puzzle input), then add together all the fuel values.
