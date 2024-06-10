import React from 'react';

function HealthPage() {
    
        return (
            <div id="_base">
                <div id="_page">
                    <div className="_content-block">
                        <span>
                            <p style={{"text-decoration": "underline"}}>Things you can expect to find on this page eventually:</p>
                            <ul>
                                <li>A more detailed look at the biomechanics behind Type 1 Diabetes</li>
                                <li>An overview of biochemical processes like gluconeogenesis, ketosis, etc</li>
                            </ul>

                            <p style={{"text-decoration": "underline"}}>and tools like:</p>
                            <ul>
                                <li>Blood Glucose Measurement convertor</li>
                                <li>Total Daily Dose calculator</li>
                                <li>and more</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    };

export default HealthPage;