// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass,
// divide by three, round down, and subtract 2.

const calculateFuel = (mass) =>
  Math.floor(mass / 3) - 2;

const calculateFuelForMultipleModules = (moduleMasses) =>
  moduleMasses.map(calculateFuel).reduce((a, b) => a + b);

module.exports = {
  calculateFuel,
  calculateFuelForMultipleModules,
};
