import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [activePage, setActivePage] = useState("/"); // The state that holds the active page, used to determine button active state.
    const navigate = useNavigate(); // Define the navigator.
    const buttons = [ // Define the array of buttons to populate the header.
        {
            pageTitle: "Home",
            href: "/"
        },
        {
            pageTitle: "Health",
            href: "/health"
        },
        {
            pageTitle: "Diet",
            href: "/dietary"
        },
        {
            pageTitle: "Resources",
            href: "/resources"
        }
    ];
    useEffect(() => { // When this component mounts, set the state of activePage to the url path. This handles header button active state initialization.
        const initialPage = window.location.pathname;
        setActivePage(initialPage);
    }, []);

    const handleClick = (href) => { // Define the handleClick function. Navigates to the route passed through href and sets the state to reflect the change.
        navigate(href);
        setActivePage(href);
    };
    const renderHeaderButtons = () => { // Define the function to populate the header with buttons.
        return buttons.map(element => ( // For each element in buttons, return a button with a key and text content equal to it's pageTitle, that passes its own href to the handleClick function. 
            <button
                key={element.pageTitle.toLowerCase()}
                onClick={() => handleClick(element.href)}
                style={{ 
                    transform: activePage === element.href ? "scale(150%) translateY(20%)" : "",
                    textDecoration: activePage === element.href ? "underline": "",
                    textDecorationColor: activePage === element.href ? "orange": "black",
                }} // Apply stylings if the activePage state is equal to the href of the element.     
            >
                <p>{element.pageTitle}</p>
            </button>
        ));
    };
    return ( // Return for the Header function. It returns a header element that is populated with buttons via the renderHeaderButtons function.

        <header id="header">
            <p id="site-title">Destigmatize Diabetes</p>
            <div id="button-container">
            {renderHeaderButtons()}
            </div>
        </header>
    );
}
export default Header;