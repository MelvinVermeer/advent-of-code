// Fuel required to launch a given module is based on its mass.
// Specifically, to find the fuel required for a module, take its mass,
// divide by three, round down, and subtract 2.

// Part 2
// Fuel itself requires fuel just like a module - take its mass,
// divide by three, round down, and subtract 2. However, that
// fuel also requires fuel, and that fuel requires fuel, and so on.
// Any mass that would require negative fuel should instead be treated
// as if it requires zero fuel; the remaining mass, if any, is instead handled
// by wishing really hard, which has no mass and is outside the scope of this calculation.

const calculateFuel = (mass) =>
  Math.max(Math.floor(mass / 3) - 2, 0);

const calculateFuelPlusExtra = (mass) => {
  const moduleFuel = calculateFuel(mass);
  let totalFuel = moduleFuel;
  let extraFuel = moduleFuel;

  do {
    extraFuel = calculateFuel(extraFuel);
    totalFuel += extraFuel;
  } while (extraFuel > 0);

  return totalFuel;
};

const calculateFuelForMultipleModules = (moduleMasses) =>
  moduleMasses.map(calculateFuelPlusExtra).reduce((a, b) => a + b);

module.exports = {
  calculateFuelPlusExtra,
  calculateFuelForMultipleModules,
};
