const sum = (a, b) => a + b;
const getPlanet = (x) => x.split(')')[1];

const findParent = (map, planet) => map
    .find((x) => getPlanet(x) === planet)
    .split(')')[0];

const findAllParents = (map, planet) => {
    if (planet === 'COM') {
        return [];
    }

    const orbitsAround = findParent(map, planet);

    return [orbitsAround, ...findAllParents(map, orbitsAround)];
};

const findShortestPathToCommonParent = (map, planet1, planet2) => {
    const c1 = findAllParents(map, planet1);
    const c2 = findAllParents(map, planet2);

    while (c1[c1.length - 2] === c2[c2.length - 2]) {
        c1.pop();
        c2.pop();
    }

    return c1.length + c2.length - 2;
};

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
    findShortestPathToCommonParent,
};
