
function algoritmoAnalisis(declaration) {
  let stack = generarStack(declaration);
  let stackContent = [];
  let apuntador = 0;

  const popInfo = (X) => {
    stackContent.push(
      `Pop: ${X}, stackContent: ${[...stack]}, Cadena : ${declaration.slice(
        apuntador
      )}`
    );
  };

  while (stack.length > 0) {
    const X = stack.pop();

    if (!X) {
      break;
    }

    const a = declaration[apuntador];

    if (X === a) {
      apuntador++;
    } else if (obtenerNT(X)) {
      const production = obtenerProduccion(X, a);

      if (production) {
        stackContent.push(
          `Push: ${X}, stackContent: ${[
            ...stack,
          ]}, Cadena : ${declaration.slice(apuntador)}`
        );
        if (production[0] !== "ε") {
          for (let i = production.length - 1; i >= 0; i--) {
            stack.push(production[i]);
          }
        }
      } else {
        stackContent.push(`Error: ${X} no tiene produccion.`);
        return { result: false, stackContent };
      }
    } else {
      popInfo(X);
      return { result: false, stackContent };
    }
  }
  const isValid = apuntador === declaration.length && stack.length === 0;
  return { result: isValid, stackContent };
}

function generarStack(declaration) {
  if (declaration.includes("if")) {
    return ["SIF"];
  } else if (declaration.includes("while")) {
    return ["WH"];
  } else if (declaration.includes("func")) {
    return ["FUNC"];
  } else if (declaration.includes("int")) {
    return ["TI"];
  } else if (declaration.includes("string")) {
    return ["TS"];
  } else if (declaration.includes("float")) {
    return ["TF"];
  } else if (declaration.includes("char")) {
    return ["TC"];
  } else if (declaration.includes("bool")) {
    return ["TB"];
  }

  else {
    return [""];
  }
}

function obtenerProduccion(noTerminal, next) {
  switch (noTerminal) {
    case "L":
      if (/[a-zA-Z0-9_]/.test(next)) {
        return [next];
      }
    case "RL":
      return /[a-zA-Z0-9]/.test(next) ? ["L", "RL"] : ["ε"];

    case "D":
      if (/[0-9]/.test(next)) {
        return [next];
      }
    case "C":
      return ['"'];
    case "CONT":
      return ["c", "o", "n", "t", "e", "n", "i", "d", "o"];
    case "SIM":
      return ["'"]
    case "PA":
      return ["("]
    case "PC":
      return [")"]
    case "VLR" :
      return /[t]/.test (next) ? ['t', 'r', 'u', 'e', 'PYC'] : /[f]/.test (next) ? ['f', 'a', 'l', 's', 'e', "PYC"] : /[0-9]/.test (next) ? ["D", "MD", "PYC"] : [ "L", "RL", "PYC", ":"]
    case "RN":
      return ["r", "e", "t", "u", "r", "n", "n", "o", "n", "e"];
    case "RD":
      return /[0-9]/.test(next) ? ["D", "RD"] : ["ε"];
    case "TVS":
      return ["s", "t", "r", "i", "n", "g"];
    case "TVF":
      return ["f", "l", "o", "a", "t"];
    case "TVB":
      return ["b", "o", "o", "l"];
    case "TVC":
      return ["c", "h", "a", "r"];
    case "IF":
      return ["i", "f"];
    case "MY":
      return [">"]
    case "CON" :
      return /[n]/.test (next) ? ['n', 'o', 'r'] : /[o]/.test (next) ? ['o','r'] : /[a]/.test (next) ? ['a', 'n', 'd'] : /[=]/.test (next) ?  [ '=', '='] :[]
      case "COND":
      return /[=]/.test(next) ? ["IG", "CONIII"] : /[>]/.test(next) ? ["MY", "CONMYI"] : ["<"];
    case "CONIII":
      return /[=]/.test(next) ? ["="] : ["<"];
    case "CONMYI":
      return /[=]/.test(next) ? ["="] : [];

    case "DP":
      return [":"]
    case "DDP":
      return [':',':']
    case "EL":
      return ["e", "l", "s", "e"]
    case "EIF":
        return ["e", "l", "s", "e","i", "f"]
    case "W":
      return ['w', 'h', 'i', 'l', 'e']
    case 'VB':
      return /[t]/.test(next) ? ['t', 'r', 'u', 'e', "PYC"] : ['f', 'a', 'l', 's', 'e', "PYC"];
    case "CS":
      return [","]
    case "MAS":
      return ["+", "+"]
    case "MEN":
      return ["-", "-"]
    case "IG":
      return ["="];
    case "F":
      return ["f", "u", "n", "c"]
    case "P":
      return ["."];
    case "PYC":
      return [";"];


    //int
    case "TVN":
      return ["i", "n", "t"];
    case "TI":
      return ["TVN", "C1"];
    case "C1":
      return ["L", "C2"];
    case "C2":
      return ["RL", "C3"];
    case "C3":
      return next === "=" ? ["IG", "C4"] : ["PYC"];
    case "C4":
      return ["D", "C5"];
    case "C5":
      return ["RD", "PYC"];

    //string
    case "TS":
      return ["TVS", "S1"];
    case "S1":
      return ["L", "S2"];
    case "S2":
      return ["RL", "S3"];
    case "S3":
      return next === "=" ? ["IG", "S4"] : ["PYC"];
    case "S4":
      return ["C", "S5"];
    case "S5":
      return ["L", "S6"];
    case "S6":
      return ["RL", "S7"];
    case "S7":
      return ["C", "PYC"];

    //CHAR
    case "TC":
      return ["TVC", "CH1"];
    case "CH1":
      return ["L", "CH2"];
    case "CH2":
      return ["RL", "CH3"];
    case "CH3":
      return next === "=" ? ["IG", "CH4"] : ["PYC"];
    case "CH4":
      return ["SIM", "CH5"];
    case "CH5":
      return ["L", "CH6"];
    case "CH6":
      return ["SIM", "PYC"];



    //bool
    case 'TB':
      return ['TVB', 'DB1'];
    case 'DB1':
      return ['L', 'DB2'];
    case "DB2":
      return ["RL", "DB3"];
    case 'DB3':
      return next === "=" ? ["IG", "VB"] : ["PYC"];

    //float
    case "TF":
      return ["TVF", "X1"];
    case "X1":
      return ["L", "X2"];
    case "X2":
      return ["RL", "X3"];
    case "X3":
      return next === "=" ? ["IG", "X4"] : ["PYC"];
    case "X4":
      return ["D", "X5"];
    case "X5":
      return ["RD", "X6"];
    case "X6":
      return ["P", "X7"];
    case "X7":
      return ["D", "X8"];
    case "X8":
      return ["RD", "PYC"];



    //declarando if
    case "SIF":
      return ["IF", "IF1"];
    case "IF1":
      return ["DPT", "IF2"];
   case "IF2":
      return ["DDP", "IF3"];
   case "IF3":
      return ["EIF", "IF4"];
    case "IF4":
      return ["DPT", "IF5"];
    case "IF5":
      return ["DDP", "IF6"];
    case "IF6":
      return ["EL", "IF7"];
    case "IF7":
      return ["DP", "IF8"];
    case "IF8":
        return ["CONT", "DP"];
    
   

    //WHILE
    case "WH":
      return ["W", "W1"];
    case "W1":
      return ["DPT", "DP"];
  
    
      //PARENTESIS
    case "DPT":
      return ["PA", "DP1"]
    case "DP1":
      return ["L", "DP3"]
    case "DP3":
      return ["CON", "DP4"]
    case "DP4":
      return ["L", "DP6"]
    case "DP6":
      return ["PC", "DP7"]
    case "DP7":
      return ["DP", "CONT"]

//Funcion
    case "FUNC":
      return ["F", "FUN1"];
    case "FUN1":
      return ["L", "FUN2"];
    case "FUN2":
      return ["RL", "FUN3"];
    case "FUN3":
      return ["DPT", "FUN4"];
    case "FUN4":
      return ["RN", "VLR"];




    default:
      return [];
  }
}

function obtenerNT(simbolo) {
  return /[a-zA-Z]/.test(simbolo);
}

export function validateVariableDeclaration(value) {
  const declarationWithoutSpaces = value.replace(/\s/g, '');
  const { result, stackContent } = algoritmoAnalisis(declarationWithoutSpaces);

  const validationMessage = {
    success: result,
    message: result ? 'Cadena válida' : 'Cadena no válida',
    stackContent: stackContent
  };

  console.log(validationMessage);

  return validationMessage;
}