import { useCallback, useEffect, useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import '../style-sheets/Automatum.css'
import {
    validateVariableDeclaration
} from "./grammar";

function Automatum() {
    const [inputResult, setInputResult] = useState("")
    const documentation =
        `LOS DATOS QUE ACEPTA SON LOS SIGUIENTES:
    \rVARIABLES(NO DECLARADAS):
    > string nombreCadena ;
    > int nombreDigito ;
    > char nombreCaracter ;
    > bool nombreBooleano ;
    > float nombreFlotante ;

    \rVARIABLES(DECLARADAS):
    > string nombreCadena = "texto" ;
    > int nombreDigito = 1 ;
    > char nombreCaracter = 'a' ;
    > bool nombreBooleano = true ;
    > float nombreFlotante = 9.2 ;

    \rSENTENCIA "IF":
    > if (parametro):
        contenido
      :

    \rSENTENCIA "ELSE IF":
    > if (parametro):
        contenido
      :: else if (parametro):
        contenido
      :

    \rSENTENCIA "ELSE":
    > if (parametro):
        contenido
      :: else if (parametro):
        contenido
      :: else :
        contenido
      :
    \rCICLO "WHILE":
    > while (condición):
        contenido
      :
    \rFUNCIONES
    > func nombreFunción (parametro):
        return x|none|true|false|9|9.2 ;
      :
    > func nombreFunción (parametro1,parametro2):
      return x|none|true|false|9|9.2 ;
    :
    > func nombreFunción (parametro1,parametro2):
      contenido ;
      return x|none|true|false|9|9.2 ;
    :
    `

    const onChange = useCallback((value) => {
        const result = validateVariableDeclaration(value);
        setInputResult(result);
    }, []);

    return (
        <div className='main-container'>
            <div className='header'>
                <div className='header-content' onClick={() => { console.log(inputResult) }}>DORIAN INDUSTRIES</div>
            </div>
            <div className='content'>
                <div className='first-content'>
                    <div className='title-f-c'></div>
                    <textarea className='description' value={documentation} readOnly />
                </div>
                <div className="second-content">
                    <div className="title-s-o-c"></div>
                        <CodeMirror
                            value=""
                            height="400px"
                            width="100%"
                            theme="dark"
                            onChange={onChange}
                            className="py-2"
                        />


                    <div className='second-two-content'>
                        <div className="title-s-t-c"></div>
                        <div className="terminal">{inputResult}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Automatum;