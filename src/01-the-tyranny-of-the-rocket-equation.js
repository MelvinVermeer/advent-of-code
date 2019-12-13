const calculateFuel = (mass) => {
  let totalFuel = 0;

  let fuelNeeded = Math.floor(mass / 3) - 2;
  if (fuelNeeded < 0) {
    fuelNeeded = 0;
  }
  totalFuel += fuelNeeded;
  if (fuelNeeded > 0) {
    const extraMass = calculateFuel(fuelNeeded);
    totalFuel += extraMass;
  }

  return totalFuel;
};

module.exports = {
  calculateFuel,
};
