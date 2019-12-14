const { intcode, findNounVerb, restore1202 } = require('../src/02-1202-program-alarm');
const data = require('../data/02.data');

describe('Day 2: 1202 Program Alarm', () => {
    it('1,0,0,0,99 -> 2,0,0,0,99', () => {
        expect(intcode([1, 0, 0, 0, 99])).toEqual([2, 0, 0, 0, 99]);
    });

    it('2,3,0,3,99 -> 2,3,0,6,99', () => {
        expect(intcode([2, 3, 0, 3, 99])).toEqual([2, 3, 0, 6, 99]);
    });

    it('2,4,4,5,99,0 -> 2,4,4,5,99,9801', () => {
        expect(intcode([2, 4, 4, 5, 99, 0])).toEqual([2, 4, 4, 5, 99, 9801]);
    });

    it('1,1,1,4,99,5,6,0,99  -> 30,1,1,4,2,5,6,0,99', () => {
        expect(intcode([1, 1, 1, 4, 99, 5, 6, 0, 99])).toEqual([30, 1, 1, 4, 2, 5, 6, 0, 99]);
    });

    it('answer -> 5110675', () => {
        expect(intcode(restore1202(data))[0]).toEqual(5110675);
    });

    it('answer day 2 -> 4847', () => {
        const result = findNounVerb(data, 19690720);
        const [noun, verb] = result;
        const answer = 100 * noun + verb;

        expect(answer).toEqual(4847);
    });
});

