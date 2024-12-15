import React from "react";
// import { useNavigate } from "react-router-dom";
import Cesar from "../../img/Cesar.jpg";
import "../../styles/index.css";
import "../../styles/about-contacts.css";

export const AboutCesar = () => {
    // const navigate = useNavigate();

    return (
        <div className="about-contacts-container">
            <h1 className="diphylleia-regular about-header">
                <strong>About Cesar</strong>
            </h1>
            <div className="pic-and-text-container">
                <img 
                    src={Cesar} 
                    alt="Image of Cesar" 
                    className="about-pic"
                />
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p><strong>Cesar's role</strong> in the development of this project was... Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    )
}