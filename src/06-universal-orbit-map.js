const sum = (a, b) => a + b;
const getPlanet = (x) => x.split(')')[1];

const findParent = (map, planet) => map
    .find((x) => getPlanet(x) === planet)
    .split(')')[0];

const countOrbits = (map, planet) => {
    if (planet === 'COM') {
        return 0;
    }

    const orbitsAround = findParent(map, planet);

    return 1 + countOrbits(map, orbitsAround);
};

const getOrbitsCount = (map) => map
    .map(getPlanet)
    .map((x) => countOrbits(map, x))
    .reduce(sum);

module.exports = {
    getOrbitsCount,
};

