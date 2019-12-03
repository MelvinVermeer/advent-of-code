/* eslint-disable no-console */
const getManhattanDistance = (x1, y1, x2, y2) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const getPath = (wire) => {
    // [[x,y], [x,y]]
};

const getIntersections = (coords1, coords2) => {
    // [[x,y], [x,y]]
};

const getDistanceToClosestIntersection = (wire1, wire2) => {
    const coords1 = getPath(wire1);
    const coords2 = getPath(wire2);
    const intersections = getIntersections(coords1, coords2);
    const distances = intersections.map(getManhattanDistance(0, 0, ...intersections));
    return Math.min(...distances);
};

const wire1 = ['R8', 'U5', 'L5', 'D3'];
const wire2 = ['U7', 'R6', 'D4', 'L4'];

module.exports = {
    getDistanceToClosestIntersection,
};

