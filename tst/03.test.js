const { getDistanceToClosestIntersection } = require('../src/03');
const data = require('./03.data');

describe('Day 3: Crossed Wires', () => {
    it('sample1', () => {
        const wire1 = ['R8', 'U5', 'L5', 'D3'];
        const wire2 = ['U7', 'R6', 'D4', 'L4'];
        expect(getDistanceToClosestIntersection(wire1, wire2)).toEqual(6);
    });

    it('sample2', () => {
        const wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
        const wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

        expect(getDistanceToClosestIntersection(wire1, wire2)).toEqual(159);
    });

    it('sample3', () => {
        const wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
        const wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

        expect(getDistanceToClosestIntersection(wire1, wire2)).toEqual(135);
    });

    it('answer => ?', () => {
        expect(getDistanceToClosestIntersection(data.wire1, data.wire2)).toEqual(303);
    });
});
