import React, { useContext } from "react";
// import border from "../../img/border.png";
// import { useNavigate } from "react-router-dom";
import Sedonia from "../../img/Sedonia.jpg";
import "../../styles/index.css";
import "../../styles/about-contacts.css";

export const AboutSedonia = () => {
    // const navigate = useNavigate();

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
                    The idea for Plant Sitter Pro came from Sedonia's many years of personal and professional
                    experience with plant care. Or, more precisely, with her years of experience traveling as a plant owner. 
                    Plants can be very picky, and they tend to require more expert care than the average friend, neighbor, or family 
                    member can provide. This leaves most plant owners in a tricky situation when they travel. Enter Plant Sitter Pro!</p>
                    <p><strong>Sedonia's role</strong> in the development of this project was primarily UX/UI, including organizing the 
                    layout and the flow of the app. She designed most (but certainly not all) of the pages and components for the frontend, 
                    helped with the integration of front and back ends, and built some back-end routes.</p>
                </div>
            </div>
        </div>
    )
}