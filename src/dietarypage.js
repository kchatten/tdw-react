import React from 'react';
import CarbPerGramCalculator from './carbpergramcalc'

function DietPage() {

    return (
        <div id="_base">
            <div id="_page">
                <div className="_content-block">
                    {CarbPerGramCalculator()}
                    {/* end of a _content-block */}
                </div>
                <div className="_content-block">
                    <span>
                        <p style={{ "text-decoration": "underline" }}>Things you can expect to find on this page eventually:</p>
                        <ul>
                            <li>A more detailed look at the different types of carbohydrates</li>
                            <li>A review of the glycemic index</li>
                            <li>Different methods of portion control</li>
                            <li>Sample meal plans</li>
                        </ul>

                        <p style={{ "text-decoration": "underline" }}>and tools like:</p>
                        <ul>
                            <li>GI Lookup</li>
                            <li>and more</li>
                        </ul>
                    </span>
                    {/* end of a _content-block */}
                </div>
                {/* end of the _page */}
            </div>
            {/* end of the _base */}
        </div>
    )
};


export default DietPage;