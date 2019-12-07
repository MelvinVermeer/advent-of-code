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

const intcodeV2 = (program, systemId) => {
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
            newProgram[newProgram[i + 1]] = systemId;
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

module.exports = {
    intcodeV2,
};
