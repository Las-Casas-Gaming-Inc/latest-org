import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Button } from "./Button";
import "./Navbar.css";

function Navbar() {
    // State to manage the mobile menu click and button visibility
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    // Toggle the mobile menu
    const handleClick = () => setClick(!click);

    // Close the mobile menu
    const closeMobileMenu = () => setClick(false);

    // Show or hide the button based on the window width
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // Effect to set up event listener for window resize
    useEffect(() => {
        showButton();
        window.addEventListener("resize", showButton);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", showButton);
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo"
                        onClick={closeMobileMenu}
                    >
                        <img
                            src="images/gamex_logo.png"
                            alt="GameX Logo"
                            className="navbar-logo-image"
                        />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                HOME
                            </Link>
                        </li>
                        <li className="/home">
                            <ScrollLink
                                to="teams"
                                smooth={true}
                                duration={2000}
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                OUR TEAM
                            </ScrollLink>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://gamexsports.com.ph/home"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                GAMEX SPORTS
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="https://lascasasgaming.com/"
                                className="nav-links"
                                onClick={closeMobileMenu}
                            >
                                OFFICIAL WEBSITE
                            </a>
                        </li>
                        <li>
                            <Link
                                to="/home"
                                className="nav-links-mobile"
                                onClick={closeMobileMenu}
                            >
                                CONTACT US
                            </Link>
                        </li>
                    </ul>
                    {/* Conditional rendering of the button */}
                    {button && (
                        <Button buttonStyle="btn--outline">CONTACT US</Button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
