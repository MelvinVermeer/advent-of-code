const { findMaxThrusterSignal } = require('../src/07-amplification-circuit');
const data = require('../data/07.data');

describe('findMaxThrusterSignal', () => {
    const sample1 = [3, 15, 3, 16, 1002, 16, 10, 16, 1, 16, 15, 15, 4, 15, 99, 0, 0];
    const sample2 = [3, 23, 3, 24, 1002, 24, 10, 24, 1002, 23, -1, 23,
        101, 5, 23, 23, 1, 24, 23, 23, 4, 23, 99, 0, 0];
    const sample3 = [3, 31, 3, 32, 1002, 32, 10, 32, 1001, 31, -2, 31, 1007, 31, 0, 33,
        1002, 33, 7, 33, 1, 33, 31, 31, 1, 32, 31, 31, 4, 31, 99, 0, 0, 0];

    it('should be 43210 for sample 1', () => {
        const maxThrusterSignal = findMaxThrusterSignal(sample1);
        expect(maxThrusterSignal).toEqual(43210);
    });

    it('should be 54321 for sample 2', () => {
        const maxThrusterSignal = findMaxThrusterSignal(sample2);
        expect(maxThrusterSignal).toEqual(54321);
    });

    it('should be 65210 for sample 3', () => {
        const maxThrusterSignal = findMaxThrusterSignal(sample3);
        expect(maxThrusterSignal).toEqual(65210);
    });

    it('answer => ?', () => {
        const maxThrusterSignal = findMaxThrusterSignal(data);
        expect(maxThrusterSignal).toEqual(206580);
    });
});

