import React from 'react';

function ResourcePage() {


    return (
        <div id="_base">
            <div id="_page">
                <div className='_content-block' style={{alignItems: "flex-start"}}>
                        <h3 style={{textDecoration: "underline", alignSelf: "center"}}>Websites</h3>
                        <h6 style={{textDecoration: "underline"}}> Community</h6>
                        <a style={{textDecoration: "none"}} href="https://www.reddit.com/r/diabetes_t1/">Reddit 1 (r/diabetes_t1)</a>
                        <a style={{textDecoration: "none"}} href="https://www.reddit.com/r/Type1Diabetes/">Reddit 2 (r/Type1Diabetes) </a>
                        <h6 style={{textDecoration: "underline"}}> Educational</h6>
                        <a style={{textDecoration:"none"}} href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3749019/">A Brief History of Diabetes</a> 
                    {/* end of a _content-block*/}
                </div>
                <div className="_content-block">
                    <span>
                        <p style={{ "text-decoration": "underline" }}>Things you can expect to find on this page eventually:</p>
                        <ul>
                            <li>Links to resources that may help provide supports with finances, emotional and physical wellbeing and more</li>
                            <li>Links to other diabetes focused educational content and communities</li>
                        </ul>
                    </span>
                    {/* end of a _content-block*/}
                </div>
                {/* end of a _page*/}
            </div>
            {/* end of a _base*/}
        </div>
    )
};

export default ResourcePage;

