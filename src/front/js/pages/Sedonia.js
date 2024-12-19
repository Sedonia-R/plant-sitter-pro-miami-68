import React from "react";
import Sedonia from "../../img/Sedonia.jpg";
import "../../styles/index.css";
import "../../styles/aboutContacts.css";

export const AboutSedonia = () => {

    return (
        <div className="about-contacts-container">
            <h1 className="diphylleia-regular about-header">
                <strong>
                    About <span style={{color: "red", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>S</span>
                    <span style={{color: "orange", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>e</span>
                    <span style={{color: "yellow", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>d</span>
                    <span style={{color: "green", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>o</span>
                    <span style={{color: "blue", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>n</span>
                    <span style={{color: "indigo", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>i</span>
                    <span style={{color: "violet", textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>a</span> (they/she)
                </strong>
            </h1>
            <div className="pic-and-text-container">
                <img 
                    src={Sedonia} 
                    alt="Image of Sedonia" 
                    className="about-pic"
                />
                <div className="about-text">
                    <p>Sedonia is a lifelong scientist and an expert at catching bugs (literally, they're an entomologist)! 
                    The idea for Plant Sitter Pro came from her many years of personal and professional
                    experience with plant care. Or, more precisely, with their years of experience traveling as a plant owner. 
                    Plants can be very picky, and they tend to require more expert care than the average friend, neighbor, or family 
                    member can provide. This leaves most plant owners in a tricky situation when they travel. Enter Plant Sitter Pro!</p>
                    <p><strong>Sedonia's role</strong> in the development of this project was primarily UX/UI, including organizing the 
                    layout and the flow of the app. She designed most (but certainly not all) of the pages and components for the frontend, 
                    helped with the integration of front and back ends, and built some back-end routes.</p>
                </div>
            </div>
            <hr />
            <div className="contact-me">
                <a className="contact-ico" href="mailto:river.sedonia@gmail.com">
                    <div className="contact-me-header diphylleia-regular">Email:</div>
                    <i className="fa-regular fa-envelope"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://www.linkedin.com/in/sedoniaraethstein">
                    <div className="contact-me-header diphylleia-regular">Linkedin:</div>
                    <i className="fa-brands fa-linkedin"/>
                </a>
                <div className="pipe">|</div>
                <a className="contact-ico" target="_blank" href="https://github.com/Sedonia-R">
                    <div className="contact-me-header diphylleia-regular">GitHub:</div>
                    <i className="fa-brands fa-github"/>
                </a>
            </div>
            <hr />
        </div>
    )
}