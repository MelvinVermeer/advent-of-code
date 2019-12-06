const hasDecreasingDigits = (password) => {
    for (let i = 1; i < password.length; i++) {
        const previousDigit = Number(password[i - 1]);
        if (Number(password[i]) < previousDigit) {
            return true;
        }
    }
    return false;
};

const hasAdjacentDoubleDigit = (password) => {
    for (let i = 1; i < password.length; i++) {
        const previousDigit = Number(password[i - 1]);
        if (Number(password[i]) === previousDigit) {
            return true;
        }
    }
    return false;
};

const isPossiblePassword = (password) => {
    if (password.length !== 6) {
        return false;
    }

    if (hasDecreasingDigits(password)) {
        return false;
    }

    if (!hasAdjacentDoubleDigit(password)) {
        return false;
    }

    return true;
};

const createNumberArrayForRange = (range) => {
    const array = [];
    const [min, max] = range.split('-').map(Number);
    for (let i = min; i <= max; i++) {
        array.push(i.toString());
    }
    return array;
};

module.exports = { isPossiblePassword, createNumberArrayForRange };

