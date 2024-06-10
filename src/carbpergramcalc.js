import React, { useState, useRef } from 'react';
import "./css/cpgcalculator.css";

// TODO: Write a unit test for this component.

function CarbPerGramCalculator() {

    const inputWeightRef = useRef(null);
    const inputCarbRef = useRef(null);
    const inputTargetRef = useRef(null);
    const outputRef = useRef(null);

    const [output, setOutput] = useState("...");

    function Calculate() {

        let gramPerCarb = (inputCarbRef.current.value / inputWeightRef.current.value);

        let result = (inputTargetRef.current.value / gramPerCarb);

        let roundedResult = Math.round((result + Number.EPSILON) * 100) / 100;


        if (result.toString() === "NaN") {
            outputRef.current.style.color = "red";
            setOutput(`Error during calculation: One or more inputs is ${result}`)
        } else {
            outputRef.current.style.color= "black"
            setOutput(roundedResult);
        }
    }

    return (
        <>
            <h1 style={{ textDecoration: "underline", textAlign: "center" }}>Carbs per Gram Calculator</h1>
            <br/>
            <div id="cpg-calculator">
                    <span> The nutritional information of my snack says;</span> 
                    <span> a portion of <input ref={inputWeightRef} type="text" placeholder="grams by weight" /> grams</span>
                    <span> has <input ref={inputCarbRef} type="text" placeholder="grams carbohydrate" /> grams net carbohydrate. </span>
                    <br/>                    
                    <span> So if I want to have <input ref={inputTargetRef} type="text" placeholder="target carbs in grams" /> grams carbohydrate of my snack; </span>
                    <br/>
                    <span> I need to weigh out <p ref={outputRef}>{output}</p> grams of my snack. </span> 
                    <button onClick={() => { Calculate() }}>Calculate</button>
            </div>
        </>
    )

}

export default CarbPerGramCalculator;