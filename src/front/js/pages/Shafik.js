import React from "react";
import Shafik from "../../img/Shafik.png";
import NoGit from "../../img/no-git.png";
import "../../styles/index.css";
import "../../styles/aboutContacts.css";

export const AboutShafik = () => {

    return (
        <div className="about-contacts-container">
            <h1 className="diphylleia-regular about-header">
                <strong>About Shafik</strong>
            </h1>
            <div className="pic-and-text-container">
                <img 
                    src={Shafik} 
                    alt="Image of Shafik" 
                    className="about-pic"
                />
                <div className="about-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <p><strong>Shafik's role</strong> in the development of this project was... Excepteur sint 
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <hr />
           <div className="contact-me">
                <a className="contact-ico" href="mailto:shafik@snbsystems.com">
                    <div className="contact-me-header diphylleia-regular">Contact Me: </div>
                    <i className="fa-regular fa-envelope"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" href="https://www.linkedin.com/in/shafikbahou/">
                    <div className="contact-me-header diphylleia-regular">Linkedin:</div>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <div className="pipe">|</div>
                <div className="popup-wrap">
                    {/* <div className="contact-me-header diphylleia-regular">GitHub:</div> */}
                    <img 
                        src={NoGit} 
                        alt="Image of GitHub icon with red circle and line indicating no GitHub profile is available." 
                        className="no-git"  
                    />
                    <div className="popup-content">
                        No Repo Available. 😔
                    </div> 
                </div>
            </div>
            <hr />
        </div>
    )
}