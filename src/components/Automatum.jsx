import { useCallback, useState } from 'react';
import CodeMirror from "@uiw/react-codemirror";
import '../style-sheets/Automatum.css'
import {
    validateVariableDeclaration
  } from "./pila"; 

function Automatum() {
  const [validationResult, setValidationResult] = useState(null);

  const onChange = useCallback((value) => {
    const result = validateVariableDeclaration(value);
    setValidationResult(result);       
  }, []);
    const documentation = 
    `LOS DATOS QUE ACEPTA SON LOS SIGUIENTES:
    \rVARIABLES(NO DECLARADAS):
    > string nombreCadena;
    > int nombreDigito;
    > char nombreCaracter;
    > bool nombreBooleano;
    > float nombreFlotante;

    \rVARIABLES(DECLARADAS):
    > string nombreCadena = "texto";
    > int nombreDigito = 1;
    > char nombreCaracter = 'a';
    > bool nombreBooleano = true;
    > float nombreFlotante = 9.2;

    \rSENTENCIA "IF-ELSE IF-ELSE":
    > if (x):
        contenido
      :: else if (x):
        contenido
      :: else :
        contenido
      :

    \rCICLO "WHILE":
    > while(x):
        contenido
      :
      
    \rFUNCIONES
    > func nombreFunción(x):
        contenido
        return none;
      :
    `

   

    return (
        <div className='main-container'>
            <div className='header'>
                <div className='header-content' onClick={()=>{console.log(validationResult)}}>DORIAN INDUSTRIES</div>
            </div>
            <div className='content'>
                <div className='first-content'>
                    <div className='title-f-c'></div>
                    <textarea className='description' value={documentation} readOnly/>
                </div>
                <div className="second-content">
                <CodeMirror
            value=""
            height="400px"
            width="600px"
            theme="dark"
            onChange={onChange}
            className="py-2"
          />
        {validationResult && (
            <>
            <div className="bg-red-100 text-purple-500 p-4 mt-4" style={{background: "#fff"}}>
            {validationResult.message}
        </div>
        <div className="bg-red-100 text-white p-4 mt-14" style={{color: "#fff"}}>
                {validationResult.stackContent.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
        </>
        
      )}
                </div>
            </div>
        </div>
    );
}

export default Automatum;