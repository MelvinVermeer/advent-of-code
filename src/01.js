const calculateFuel = (mass) =>
  Math.floor(mass / 3) - 2;

const calculateFuelForMultipleModules = (moduleMasses) =>
  moduleMasses.map(calculateFuel).reduce((a, b) => a + b);

module.exports = {
  calculateFuel,
  calculateFuelForMultipleModules,
};
