import React from 'react';

class ResourcePage extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="_base">
                <div id="_page">
                    <div className="_content-block">
                        <span>
                            <p style={{ "text-decoration": "underline" }}>Things you can expect to find on this page eventually:</p>
                            <ul>
                                <li>Links to resources that may help provide supports with finances, emotional and physical wellbeing and more</li>
                                <li>Links to other diabetes focused educational content and communities</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        )
    };
};

export default ResourcePage;

