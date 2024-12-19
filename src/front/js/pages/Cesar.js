import React from "react";
import Cesar from "../../img/Cesar.jpg";
import "../../styles/index.css";
import "../../styles/aboutContacts.css";

export const AboutCesar = () => {

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
            <hr />
            <div className="contact-me">
                <a className="contact-ico" href="mailto:cesar.rafael.gep@gmail.com">
                    <div className="contact-me-header diphylleia-regular">Contact Me: </div>
                    <i className="fa-regular fa-envelope"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://www.linkedin.com/in/cesaramcolson">
                    <div className="contact-me-header diphylleia-regular">Linkedin:</div>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://github.com/cesaramcolson">
                    <div className="contact-me-header diphylleia-regular">GitHub:</div>
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
            <hr />
        </div>
    )
}