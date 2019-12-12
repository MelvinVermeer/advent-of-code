const getValue = (program, position, mode) => {
    if (mode === 1) {
        // MODE === 1  immediate mode
        return program[position];
    }

    // position mode
    return program[program[position]];
};

const getParameterMode = (instruction, position) => {
    // 1002 -> [0,1]
    const modes = instruction
        .toString()
        .split('')
        .reverse()
        .slice(2)
        .map(Number);

    return modes[position] || 0;
};

const removeAt = (array, i) => {
    const beforeI = array.slice(0, i);
    const afterI = array.slice(i + 1);
    return [...beforeI, ...afterI];
};

// return all different orderings
const getCombinations = (array) => {
    const allCombinations = [];
    array.forEach((element, index) => {
        if (array.length === 1) {
            allCombinations.push([element]);
        } else {
            for (const combination of getCombinations(removeAt(array, index))) {
                allCombinations.push([element, ...combination]);
            }
        }
    });
    return allCombinations;
};

const intcodeV3 = (program, inputs) => {
    const newProgram = [...program];
    let output = -1;
    for (let i = 0; i < newProgram.length;) {
        const instruction = newProgram[i];
        const opcode = instruction % 100;

        if (opcode === 99) {
            return output;
        }

        const value1 = getValue(newProgram, i + 1, getParameterMode(instruction, 0));
        const value2 = getValue(newProgram, i + 2, getParameterMode(instruction, 1));

        const newPosition = newProgram[i + 3];

        if (opcode === 1) {
            newProgram[newPosition] = value1 + value2;
            i += 4;
        }

        if (opcode === 2) {
            newProgram[newPosition] = value1 * value2;
            i += 4;
        }

        if (opcode === 3) {
            newProgram[newProgram[i + 1]] = inputs[0];
            inputs.shift();
            i += 2;
        }

        if (opcode === 4) {
            output = value1;
            i += 2;
        }

        if (opcode === 5) {
            if (value1 !== 0) {
                i = value2;
            } else {
                i += 3;
            }
        }

        if (opcode === 6) {
            if (value1 === 0) {
                i = value2;
            } else {
                i += 3;
            }
        }

        if (opcode === 7) {
            if (value1 < value2) {
                newProgram[newPosition] = 1;
            } else {
                newProgram[newPosition] = 0;
            }
            i += 4;
        }

        if (opcode === 8) {
            if (value1 === value2) {
                newProgram[newPosition] = 1;
            } else {
                newProgram[newPosition] = 0;
            }
            i += 4;
        }
    }

    return output;
};

const amplifyInput = (program, phaseSettings) => {
    const copyA = [...program];
    const outputA = intcodeV3(copyA, [phaseSettings[0], 0]);

    const copyB = [...program];
    const outputB = intcodeV3(copyB, [phaseSettings[1], outputA]);

    const copyC = [...program];
    const outputC = intcodeV3(copyC, [phaseSettings[2], outputB]);

    const copyD = [...program];
    const outputD = intcodeV3(copyD, [phaseSettings[3], outputC]);

    const copyE = [...program];
    const outputE = intcodeV3(copyE, [phaseSettings[4], outputD]);

    return outputE;
};

const findMaxThrusterSignal = (program) => {
    const allPhaseSettings = getCombinations([4, 3, 2, 1, 0]);
    let max = 0;
    for (const phaseSetting of allPhaseSettings) {
        const val = amplifyInput(program, phaseSetting);
        max = Math.max(max, val);
    }
    return max;
};

module.exports = {
    findMaxThrusterSignal,
};
