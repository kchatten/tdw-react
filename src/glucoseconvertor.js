import React, { useState, useRef } from 'react';
import "./css/bgconvertor.css";


// TODO: Write a unit test for this component.
// TODO: Incrase a11y

function BloodGlucoseConvertor() {

    const decilitreInputRef = useRef(null);
    const decilitreOutputRef = useRef(null);
    const millimolesInputRef = useRef(null);
    const millimolesOutputRef = useRef(null);


    const [decilitreOutput, setDecilitreOutput] = useState("...");
    const [millimolesOutput, setMillimolesOutput] = useState("...");

    function Calculate() {
        
        const decilitreInput = decilitreInputRef.current.value;
        const millimolesInput = millimolesInputRef.current.value;

        const outputInDl = millimolesInput * 18.0182;
        if(outputInDl.toString() === "NaN") {
            decilitreOutputRef.current.style.color = "red";
            setDecilitreOutput("Error: Input is not a number")
        } else {
            decilitreOutputRef.current.style.color = "black";
            setDecilitreOutput(outputInDl.toFixed(2));
        }

        const outputInMmol = decilitreInput / 18.0182;
        if(outputInMmol.toString() === "NaN") {
            millimolesOutputRef.current.style.color = "red";
            setMillimolesOutput("Error: Input is not a number")
        } else {
            millimolesOutputRef.current.style.color = "black";
            setMillimolesOutput(outputInMmol.toFixed(2));
        }
    }
    
    function Reset() {
        decilitreInputRef.current.value = "";
        setDecilitreOutput("...");
        millimolesInputRef.current.value = "";
        setMillimolesOutput("...");
    }

    return (
        <>
            <h1 style={{ textDecoration: "underline", textAlign: "center" }}>Blood Glucose Convertor</h1>
            <br/>
            <div id="bg-convertor-container">
                <div id="input-container">
                    <span className="conversion-container">
                        <input ref={decilitreInputRef} type="text"></input>
                        <p>mg/dl</p>
                    </span>
                    <p>Input</p>
                    <span className="conversion-container">
                        <input ref={millimolesInputRef} type="text"></input>
                        <p>mmol</p>
                    </span>
                </div>
                <button onClick={()=>{Calculate()}}>Convert</button>
                <button onClick={()=>{Reset()}}>Reset</button>
                <div id="output-container">
                    <span className="conversion-container">
                        <p ref={millimolesOutputRef}>{millimolesOutput}</p>
                        <p>mmol</p>
                    </span>
                    <p>Output</p>
                    <span className="conversion-container">
                        <p ref={decilitreOutputRef}>{decilitreOutput}</p>
                        <p>mg/dl</p>
                    </span>
                </div>
            </div>
        </>
    )

}

export default BloodGlucoseConvertor;