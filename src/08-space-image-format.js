const is0 = (x) => x === 0;
const is1 = (x) => x === 1;
const isTransparent = (x) => x === 2;
const layerSorter = (a, b) => a.filter(is0).length - b.filter(is0).length;

function splitByLength(array, length) {
    return array.reduce((accumulator, currentValue) => {
        if (accumulator[accumulator.length - 1].length === length) {
            accumulator.push([]);
        }
        accumulator[accumulator.length - 1].push(currentValue);
        return accumulator;
    }, [[]]);
}

function getChecksumForLayer(layer) {
    const ones = layer.filter(is1).length;
    const twos = layer.filter(isTransparent).length;

    return ones * twos;
}

const getImageChecksum = (image, width, height) => {
    const array = Array.from(image).map(Number);
    const layers = splitByLength(array, width * height);
    const sorted = [...layers].sort(layerSorter);
    const checksum = getChecksumForLayer(sorted[0]);

    return checksum;
};

const mergeLayers = (topLayer, lowerLayer) =>
    topLayer.map((value, index) => (isTransparent(value) ? lowerLayer[index] : value));

const decodeImage = (image, width, height) => {
    const array = Array.from(image).map(Number);
    const layers = splitByLength(array, width * height);
    return layers.reduce(mergeLayers);
};

module.exports = {
    splitByLength,
    decodeImage,
    getImageChecksum,
};

