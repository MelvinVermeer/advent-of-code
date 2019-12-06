const restore1202 = (program) => {
    const newProgram = [...program];
    newProgram[1] = 12;
    newProgram[2] = 2;
    return newProgram;
};

const intcode = (program) => {
    const newProgram = [...program];

    for (let i = 0; i < newProgram.length; i += 4) {
        const opcode = newProgram[i];

        if (opcode === 99) {
            return newProgram;
        }

        const value1 = newProgram[newProgram[i + 1]];
        const value2 = newProgram[newProgram[i + 2]];
        const newPosition = newProgram[i + 3];

        if (opcode === 1) {
            newProgram[newPosition] = value1 + value2;
        }

        if (opcode === 2) {
            newProgram[newPosition] = value1 * value2;
        }
    }

    return newProgram;
};

const findNounVerb = (program, outputToFind) => {
    for (let noun = 0; noun < 100; noun++) {
        for (let verb = 0; verb < 100; verb++) {
            const copy = [...program];
            copy[1] = noun;
            copy[2] = verb;
            if (intcode(copy)[0] === outputToFind) {
                return [noun, verb];
            }
        }
    }

    throw new Error('not found');
};

module.exports = {
    intcode,
    findNounVerb,
    restore1202,
};
