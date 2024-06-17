import React from 'react';
import BloodGlucoseConvertor from './glucoseconvertor';

function HealthPage() {
    
        return (
            <div id="_base">
                <div id="_page">
                    <div className="_content-block">              
                        <BloodGlucoseConvertor/>
                        { /* end of a _content-block */ }
                    </div>
                    <div className="_content-block">
                        <span>
                            <p style={{"text-decoration": "underline"}}>Things you can expect to find on this page eventually:</p>
                            <ul>
                                <li>A more detailed look at the biomechanics behind Type 1 Diabetes</li>
                                <li>An overview of biochemical processes like gluconeogenesis, ketosis, etc</li>
                            </ul>

                            <p style={{"text-decoration": "underline"}}>and tools like:</p>
                            <ul>
                                <li>Total Daily Dose calculator</li>
                                <li>and more</li>
                            </ul>
                        </span>
                        { /* end of a _content-block */ }
                    </div>
                    { /* end of a _page */ }
                </div>
                { /* end of a _base */ }
            </div>
        )
    };

export default HealthPage;