const { getOrbitsCount, findShortestPathToCommonParent } = require('../src/06-universal-orbit-map');
const data = require('../data/06.data');

describe('Day 6: Universal Orbit Map', () => {
    it('sample 1', () => {
        const map = ['COM)B', 'B)C', 'C)D', 'D)E', 'E)F', 'B)G', 'G)H', 'D)I', 'E)J', 'J)K', 'K)L'];
        expect(getOrbitsCount(map)).toEqual(42);
    });

    it('answer', () => {
        expect(getOrbitsCount(data)).toEqual(344238);
    });

    it('answer part 2', () => {
        expect(findShortestPathToCommonParent(data, 'YOU', 'SAN')).toEqual(436);
    });
});

