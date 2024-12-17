import React from "react";
// import { useNavigate } from "react-router-dom";
import Oneil from "../../img/Oneil.jpg";
import "../../styles/index.css";
import "../../styles/aboutContacts.css";

export const AboutOneil = () => {
    // const navigate = useNavigate();

    return (
        <div className="about-contacts-container">
            <h1 className="diphylleia-regular about-header">
                <strong>About Oneil</strong>
            </h1>
            <div className="pic-and-text-container">
                <img 
                    src={Oneil} 
                    alt="Image of Oneil" 
                    className="about-pic"
                />
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p><strong>Oneil's role</strong> in the development of this project was... Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <hr />
            <div className="contact-me">
                <a className="contact-ico" href="mailto:Oneilorodney@gmail.com">
                    <div className="contact-me-header diphylleia-regular">Contact Me: </div>
                    <i className="fa-regular fa-envelope"/>
                </a>
                <div className="divider">|</div>
                <a className="contact-ico" target="_blank" href="https://www.linkedin.com/in/oneil-rodney">
                    <div className="contact-me-header diphylleia-regular">Linkedin:</div>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <div className="divider">|</div>
                <a className="contact-ico" target="_blank" href="https://github.com/Oneil-R">
                    <div className="contact-me-header diphylleia-regular">GitHub:</div>
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
            <hr />
        </div>
    )
}