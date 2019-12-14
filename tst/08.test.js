const { getImageChecksum, decodeImage, splitByLength } = require('../src/08-space-image-format');
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

    it('should 0222112222120000 => 0110', () => {
        const decoded = decodeImage('0222112222120000', 2, 2);
        expect(decoded).toEqual([0, 1, 1, 0]);
    });

    it('should render', () => {
        const decoded = decodeImage(data, 25, 6);
        const colored = decoded.map((bit) => (bit ? '▓' : ' '));
        const lines = splitByLength(colored, 25);
        console.log(lines.map((line) => line.join('')).join('\n'));
    });
});
