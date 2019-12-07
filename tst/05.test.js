const { intcodeV2 } = require('../src/05-sunny-with-a-chance-of-asteroids');
const data = require('./05.data');

describe('Day 5: Sunny with a Chance of Asteroids', () => {
    it('answer part 1', () => {
        expect(intcodeV2(data, 1)).toEqual(13978427);
    });

    it('test 1001', () => {
        expect(intcodeV2([3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31,
            1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104,
            999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99], 9)).toEqual(1001);
    });

    it('test 1000', () => {
        expect(intcodeV2([3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31,
            1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104,
            999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99], 8)).toEqual(1000);
    });

    it('test 999', () => {
        expect(intcodeV2([3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31,
            1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104,
            999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99], 7)).toEqual(999);
    });

    it('answer part 2', () => {
        expect(intcodeV2(data, 5)).toEqual(11189491);
    });
});

