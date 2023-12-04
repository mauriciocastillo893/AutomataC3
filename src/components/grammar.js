const stateMap = {
    "qe": [
        {
            nextState: "q010",
            error: "Misspelled reserved word.",
            rule: /^int$/,
        },
        {
            nextState: "q020",
            error: "Misspelled reserved word.",
            rule: /^float$/,
        },
        {
            nextState: "q030",
            error: "Misspelled reserved word.",
            rule: /^bool$/,
        },
        {
            nextState: "q040",
            error: "Misspelled reserved word.",
            rule: /^string$/,
        },
        {
            nextState: "q080",
            error: "Misspelled reserved word.",
            rule: /^char$/,
        },
        {
            nextState: "q2",
            error: "Misspelled reserved word.",
            rule: /^func$/,
        },
        {
            nextState: "q6",
            error: "Misspelled reserved word.",
            rule: /^if$/,
        },
        {
            nextState: "q12",
            error: "Misspelled reserved word.",
            rule: /^while$/,
        },


    ],
    "q010": [
        {
            nextState: "q0101",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0101": [
        {
            nextState: "q011",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q012",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q011": [
        {
            nextState: "q012",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q010",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q012": [
        {
            nextState: "q0103",
            error: "Invalid expression",
            rule: /^[0-9]*$/,
        },
    ],
    "q0103": [
        {
            nextState: "q013",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q013": [
        {
            nextState: "q010",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q020": [
        {
            nextState: "q0201",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0201": [
        {
            nextState: "q021",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q022",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q021": [
        {
            nextState: "q022",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q020",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q022": [
        {
            nextState: "q0203",
            error: "Invalid expression",
            rule: /^[0-9]*.[0-9]*$/,
        },
    ],
    "q0203": [
        {
            nextState: "q023",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q023": [
        {
            nextState: "q020",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q030": [
        {
            nextState: "q0301",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q0301": [
        {
            nextState: "q031",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q032",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q031": [
        {
            nextState: "q032",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q030",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q032": [
        {
            nextState: "q0303",
            error: "Invalid expression",
            rule: /^(true|false)*$/,
        },
    ],
    "q0303": [
        {
            nextState: "q033",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q033": [
        {
            nextState: "q030",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q040": [
        {
            nextState: "q0401",
            error: "Invalid expression",
            rule: /^[a-z][a-zA-Z0-9]*$/,
        },
    ],
    "q0401": [
        {
            nextState: "q041",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q042",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q041": [
        {
            nextState: "q042",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q040",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q042": [
        {
            nextState: "q0403",
            error: "Double quotation marks expected",
            rule: /^".*"$/
        },
        {
            nextState: "q044",
            error: "Double quotation marks expected",
            rule: /^".*$/
        },
    ],
    "q0403": [
        {
            nextState: "q043",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q043": [
        {
            nextState: "q040",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q044": [
        {
            nextState: "q043",
            error: "Invalid value or double quotation marks missing",
            rule: /^[^"]"*$/
        },
        {
            nextState: "q044",
            error: "Invalid word",
            rule: /^[^"]+$/
        }
    ], "q080": [
        {
            nextState: "q0801",
            error: "Invalid expression",
            rule: /^[a-z][a-zA-Z0-9]*$/,
        },
    ],
    "q0801": [
        {
            nextState: "q081",
            error: "Semicolon or equals expected",
            rule: /^;$/,
        },
        {
            nextState: "q082",
            error: "Invalid operator",
            rule: /^=$/,
        },
    ],
    "q081": [
        {
            nextState: "q082",
            error: "Invalid operator",
            rule: /^=$/,
        },
        {
            nextState: "q080",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q082": [
        {
            nextState: "q0803",
            error: "Quotation marks expected",
            rule: /^''$/
        },
        {
            nextState: "q0803",
            error: "Quotation marks expected",
            rule: /^'[a-zA-Z0-9]'$/,
        },
    ],
    "q0803": [
        {
            nextState: "q083",
            error: "Semicolon expected",
            rule: /^;$/,
        },
    ],
    "q083": [
        {
            nextState: "q080",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q084": [
        {
            nextState: "q083",
            error: "Invalid value or Quotation marks missing",
            rule: /^[^']'*$/
        },
        {
            nextState: "q084",
            error: "Invalid word",
            rule: /^[^']+$/
        }
    ],
    "q1": [
        {
            nextState: "qfd",
            error: "Invalid variable name",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q2": [
        {
            nextState: "q3",
            error: "Invalid name variable",
            rule: /^[a-z][a-zA-Z0-9_]*$/,
        }
    ],
    "q3": [
        {
            nextState: "q301r",
            error: "Invalid closing parenthesis and opening curly braces",
            rule: /^(\(\)$|^\([a-zA-Z0-9_,]*\):)$/
        },
    ],
    "q301r": [
        {
            nextState: "q302r",
            error: "Invalid content statement",
            rule: /^[a-zA-Z0-9]*$/
        },
    ],
    "q302r": [
        {
            nextState: "q3r",
            error: "Semicolon expected",
            rule: /^;$/
        },
    ],
    "q3r": [
        {
            nextState: "q4",
            error: "Invalid return statement",
            rule: /^[r,e,t,u,r,n]*$/
        },
    ],
    "q003": [
        {
            nextState: "q004",
            error: "Invalid variable separation",
            rule: /^,$/,
        }
    ],
    "q004": [
        {
            nextState: "q4",
            error: "Invalid closing parenthesis and opening curly braces",
            rule: /^[a-z][a-z0-9_]*\){$/
        },
        {
            nextState: "q003",
            error: "Invalid closing parenthesis and opening curly braces",
            rule: /^[a-z][a-z0-9_]*$/

        }
    ],
    "q4": [
        {
            nextState: "q401r",
            error: "Invalid return statement",
            rule: /^[a-zA-Z0-9_.]+$/,
        },
        {
            nextState: "q050",
            error: "Invalid name variable o inicio mal escrito",
            rule: /^\(".*$/,
        },
    ],
    "q401r": [
        {
            nextState: "q5",
            error: "Invalid return statement",
            rule: /^;$/,
        },
    ],
    "q050": [
        {
            nextState: "q050",
            error: "Invalid word phrase",
            rule: /^return .+$/,
        },
    ],
    
    "q5": [
        {
            nextState: "qff",
            error: "Invalid curly braces closing",
            rule: /^:$/,
        },
    ],
    "q6": [
        {
            nextState: "q7",
            error: "Structure if statement expected",
            rule: /^\([a-z][a-z0-9_]*\):$/,
        },
    ],
    "q7": [
        {
            nextState: "q8",
            error: "No empty content expected",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q8": [
        {
            nextState: "qfif",
            error: "Closing if statement expected",
            rule: /^:$/,
        },
        {
            nextState: "q9",
            error: "Expected ::",
            rule: /^::$/,
        }
    ],
    "q090": [
        {
            nextState: "q9",
            error: "Palabra no válida o cierre incorrecto",
            rule: /^[^"]*"\)\.write$/
        },
        {
            nextState: "q090",
            error: "Invalid word phrase",
            rule: /^[^"]+$/
        }
    ],
    "q901": [
        {
            nextState: "q10",
            error: "Invalid else if statement",
            rule: /^if$/,
        }
    ],
    "q9": [
        {
            nextState: "q901",
            error: "Invalid else if statement",
            rule: /^(else)$/,
        },
    ],
    "q10": [
        {
            nextState: "q101",
            error: "Params structure of else if invalid",
            rule: /^\([a-z][a-zA-Z0-9_]*\):$/,
        },
    ],
    "q101": [
        {
            nextState: "q102",
            error: "No empty content expected",
            rule: /^[a-z][a-z0-9_]*$/,
        }
    ],
    "q102": [
        {
            nextState: "qfif",
            error: "Colon expected",
            rule: /^:$/,
        },
        {
            nextState: "q103",
            error: "Double colon expected",
            rule: /^::$/,
        }
    ],
    "q103": [
        {
            nextState: "q106",
            error: "Invalid else statement",
            rule: /^else$/,
        },
    ],
    "q106":[
        {
            nextState: "q104",
            error: "Invalidad else statement",
            rule: /^:$/,
        },
    ],
    "q104": [
        {
            nextState: "q105",
            error: "No empty content expected",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q105": [
        {
            nextState: "qfif",
            error: "Colon expected",
            rule: /^:$/,
        },

    ],
    "q11": [
        {
            nextState: "qfs",
            error: "Invalid curly braces closing",
            rule: /^\([a-z][a-z0-9_]*\):$/,
        },
    ],
    "q12": [
        {
            nextState: "q13",
            error: "Nombre de variable de while no válido",
            rule: /^\([a-z][a-z0-9_]*\):$/,
        },
    ],
    "q13": [
        {
            nextState: "q14",
            error: "Invalid operator",
            rule: /^[a-z][a-z0-9_]*$/,
        },
    ],
    "q14": [
        {
            nextState: "qfwhile",
            error: "Invalid expression",
            rule: /^:$/
        },
    ],
};

const ERROR_STATE = "q0-error";

export function validateVariableDeclaration(value) {
    const stack = [];
    stack.push("qe"); // Initial state

    const lines = value.split('\n');

    for (const line of lines) {
        const tokens = line.trim().split(' ');
        for (const token of tokens) {
            const currentState = stack.pop(); // Pop the current state from the stack
            const nextState = getNextStateBasedOnToken(currentState, token);
            if (nextState === ERROR_STATE) {
                return `ERROR UNEXPECTED [${currentState}]: ${stateMap[currentState][0].error} (Token: ${token})`;
            }

            if (currentState === "qe" && token.endsWith('_')) {
                return `ERROR UNEXPECTED: Nombre de variable no puede terminar en '_' (Token: ${token})`;
            }

            stack.push(nextState); // Push the next state onto the stack
            console.log(`Current Stack Value: ${token + " " + stack}`);
        }
    }

    const acceptedStates = ["qfd", "q011", "q021", "q031", "q041", "q081"];
    const initializationStates = ["q013", "q023", "q033", "q043", "q083"];
    const validStates = ["qff", "qfs", "qfif", "qfwhile"];

    const currentState = stack.pop(); // Final state

    if (acceptedStates.includes(currentState)) {
        return "Declaration variable is accepted";
    } else if (initializationStates.includes(currentState)) {
        return "Variable declaration and initialization is valid";
    } else if (validStates.includes(currentState)) {
        return `${currentState} is valid`;
    } else {
        return `Error: ${currentState}: ${stateMap[currentState][0].error}`;
    }
}

function getNextStateBasedOnToken(currentState, token) {
    const stateTransitions = stateMap[currentState];
    if (stateTransitions) {
        for (const transition of stateTransitions) {
            if (transition.rule.test(token)) {
                return transition.nextState;
            }
        }
    }
    return ERROR_STATE;
}
