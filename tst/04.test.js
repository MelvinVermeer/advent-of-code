const { isPossiblePassword, createNumberArrayForRange } = require('../src/04-secure-container');

describe('Day 4: Secure Container', () => {
    it('111111 true', () => {
        expect(isPossiblePassword('111111')).toBeTruthy();
    });

    it('decreasing digits false', () => {
        expect(isPossiblePassword('223450')).toBeFalsy();
    });

    it('less than 6 digits - false', () => {
        expect(isPossiblePassword('11111')).toBeFalsy();
    });

    it('more than 6 digits - false', () => {
        expect(isPossiblePassword('1111111')).toBeFalsy();
    });

    it('no adjacent double digit false', () => {
        expect(isPossiblePassword('123789')).toBeFalsy();
    });

    it('answer => 1079', () => {
        const range = '245318-765747';
        const passwords = createNumberArrayForRange(range);
        expect(passwords.filter(isPossiblePassword).length).toEqual(1079);
    });
});
