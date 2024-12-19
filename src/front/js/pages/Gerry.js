import React from "react";
// import { useNavigate } from "react-router-dom";
import Gerry from "../../img/Gerry.jpg";
import "../../styles/index.css";
import "../../styles/aboutContacts.css";

export const AboutGerry = () => {
    // const navigate = useNavigate();

    return (
        <div className="about-contacts-container">
            <h1 className="diphylleia-regular about-header">
                <strong>About Gerry</strong>
            </h1>
            <div className="pic-and-text-container">
                <img 
                    src={Gerry} 
                    alt="Image of Gerry" 
                    className="about-pic"
                />
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p><strong>Gerry's role</strong> in the development of this project was... Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <hr />
            <div className="contact-me">
                <a className="contact-ico" href="mailto:gerardor2do@gmail.com">
                    <div className="contact-me-header diphylleia-regular">Contact Me: </div>
                    <i className="fa-regular fa-envelope"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://www.linkedin.com/in/gerardoarturorivas">
                    <div className="contact-me-header diphylleia-regular">Linkedin:</div>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://github.com/Thisisgerry123">
                    <div className="contact-me-header diphylleia-regular">GitHub:</div>
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
            <hr />
        </div>
    )
}