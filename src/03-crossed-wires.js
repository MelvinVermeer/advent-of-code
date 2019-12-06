const intersectionBy = require('lodash/intersectionBy');

const getManhattanDistance = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2);
const getSteps = (section) => Number(section.substr(1));
const getDirection = (section) => section[0];
const coordinateToString = ([x, y]) => `${x},${y}`;

const directions = {
    U: ([x, y]) => [x, y + 1],
    R: ([x, y]) => [x + 1, y],
    D: ([x, y]) => [x, y - 1],
    L: ([x, y]) => [x - 1, y],
};

const getPath = (wire) => {
    const path = [[0, 0]];

    for (const section of wire) {
        const length = getSteps(section);

        for (let index = 0; index < length; index++) {
            const lastCoordinate = path[path.length - 1];
            const nextCoordinate = directions[getDirection(section)](lastCoordinate);
            path.push(nextCoordinate);
        }
    }

    return path;
};

const getDistanceToClosestIntersection = (wire1, wire2) => {
    const path1 = getPath(wire1);
    const path2 = getPath(wire2);

    const distances = intersectionBy(path1, path2, coordinateToString)
        .map((coordinate) => getManhattanDistance([0, 0], coordinate))
        .filter((x) => x > 0);

    return Math.min(...distances);
};

const getStepDistance = (path, coordinate) => path
    .map(coordinateToString)
    .indexOf(coordinateToString(coordinate));

const getMinimumStepDistance = (wire1, wire2) => {
    const path1 = getPath(wire1);
    const path2 = getPath(wire2);

    const distances = intersectionBy(path1, path2, coordinateToString)
        .filter(([x, y]) => x !== 0 && y !== 0)
        .map((coordinate) =>
            getStepDistance(path1, coordinate) + getStepDistance(path2, coordinate));

    return Math.min(...distances);
};

module.exports = {
    getDistanceToClosestIntersection, getMinimumStepDistance,
};
