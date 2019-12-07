const { intcodeV2 } = require('../src/05-sunny-with-a-chance-of-asteroids');
const data = require('./05.data');

describe('Day 5: Sunny with a Chance of Asteroids', () => {
    it('answer -> 5110675', () => {
        expect(intcodeV2(data)).toEqual(13978427);
    });

    // it('answer day 2 -> 4847', () => {
    //     const result = findNounVerb(data, 19690720);
    //     const [noun, verb] = result;
    //     const answer = 100 * noun + verb;

    //     expect(answer).toEqual(4847);
    // });
});

