const { getImageChecksum } = require('../src/08-space-image-format');
const data = require('./08.data');

describe('getImageChecksum', () => {
    const sample1 = '123456789012';
    it('sample1 => 1', () => {
        const checksum = getImageChecksum(sample1, 3, 2);
        expect(checksum).toEqual(1);
    });

    it('answer => ?', () => {
        const checksum = getImageChecksum(data, 25, 6);
        expect(checksum).toEqual(2016);
    });
});
