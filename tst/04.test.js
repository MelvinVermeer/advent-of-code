const { isPossiblePassword, createNumberArrayForRange } = require('../src/04-secure-container');

describe('Day 4: Secure Container', () => {
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

    it('adjacent double digit true', () => {
        expect(isPossiblePassword('112233')).toBeTruthy();
    });

    it('adjacent double digit true, 22', () => {
        expect(isPossiblePassword('111122')).toBeTruthy();
    });

    it('adjacent double digit shoud not be part of larger group', () => {
        expect(isPossiblePassword('123444')).toBeFalsy();
    });

    it('answer => 699', () => {
        const range = '245318-765747';
        const passwords = createNumberArrayForRange(range);
        expect(passwords.filter(isPossiblePassword).length).toEqual(699);
    });
});
