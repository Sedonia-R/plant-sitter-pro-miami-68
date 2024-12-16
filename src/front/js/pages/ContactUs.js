import React from "react";
import { useNavigate } from "react-router-dom";
import Sedonia from "../../img/Sedonia.jpg";
import Cesar from "../../img/Cesar.jpg";
import Gerry from "../../img/Gerry.jpg";
import Oneil from "../../img/Oneil.jpg";
import Shafik from "../../img/Shafik.png";
import NoGit from "../../img/no-git.png";
import "../../styles/index.css";
import "../../styles/contactUs.css";

export const ContactUs = () => {
    const navigate = useNavigate();
    return (
        <div className="h-100">
            <div className="contacts-container mt-3">
                <h1 className="diphylleia-regular mb-4 text-center"><strong>Meet the Developers</strong></h1 >
                <p className="contact-intro-text">
                    This app was built as a capstone project for the
                    <span> <a className="four-geeks-link" target="_blank" href="https://4geeks.com/">
                        4Geeks Academy
                    </a></span>
                    <strong> Full Stack Developer Bootcamp </strong> 
                    and is brought to you by the junior developers listed below. 
                    Click on "Learn More" to find out more about each individual developer's contributions to this project.
                </p>
                <div className="row card-container">
                    {/* Sedonia */}
                    <div className="contacts">
                        <img 
                            src={Sedonia} 
                            alt="Image of Sedonia" 
                            className="contact-img" 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title diphylleia-regular text-white contact-header">
                                <strong>Sedonia Raethstein</strong>
                            </h5>
                            <div className="contact-text">
                                <i className="fa-solid fa-location-dot"/>  Gainesville, FL
                            </div>
                            <div className="contact-icons">
                                <a className="contact-us" href="mailto:river.sedonia@gmail.com">
                                    <i className="fa-regular fa-envelope"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://www.linkedin.com/in/sedoniaraethstein">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://github.com/Sedonia-R">
                                    <i className="fa-brands fa-github"/>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <button 
                            className="contacts-button"
                            type="button"
                                onClick={
                                    () => {
                                        navigate('/Sedonia')
                                    }
                                }
                            >
                            Learn More
                        </button>
                    </div>
                    {/* Cesar */}
                    <div className="contacts">
                        <img 
                            src={Cesar} 
                            alt="Image of Cesar" 
                            className="contact-img" 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title diphylleia-regular text-white contact-header">
                                <strong>Cesar Amaya</strong>
                            </h5>
                            <div className="contact-text">
                                <i className="fa-solid fa-location-dot"/>  Orlando, FL
                            </div>
                            <div className="contact-icons">
                                <a className="contact-us" href="mailto:cesar.rafael.gep@gmail.com">
                                    <i className="fa-regular fa-envelope"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://www.linkedin.com/in/cesaramcolson">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://github.com/cesaramcolson">
                                    <i className="fa-brands fa-github"/>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <button 
                            className="contacts-button"
                            type="button"
                                onClick={
                                    () => {
                                        navigate('/Cesar')
                                    }
                                }
                            >
                            Learn More
                        </button>
                    </div>
                    {/* Gerardo */}
                    <div className="contacts">
                        <img 
                            src={Gerry} 
                            alt="Image of Gerry" 
                            className="contact-img" 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title diphylleia-regular text-white contact-header">
                                <strong>Gerardo Rivas</strong>
                            </h5>
                            <div className="contact-text">
                                <i className="fa-solid fa-location-dot"/>  Plantation, FL
                            </div>
                            <div className="contact-icons">
                                <a className="contact-us" href="mailto:gerardor2do@gmail.com">
                                    <i className="fa-regular fa-envelope"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://www.linkedin.com/in/gerardoarturorivas">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://github.com/Thisisgerry123">
                                    <i className="fa-brands fa-github"/>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <button 
                            className="contacts-button"
                            type="button"
                                onClick={
                                    () => {
                                        navigate('/Gerry')
                                    }
                                }
                            >
                            Learn More
                        </button>
                    </div>
                    {/* Oneil */}
                    <div className="contacts">
                        <img 
                            src={Oneil} 
                            alt="Image of Oneil" 
                            className="contact-img" 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title diphylleia-regular text-white contact-header">
                                <strong>Oneil Rodney</strong>
                            </h5>
                            <div className="contact-text">
                                <i className="fa-solid fa-location-dot"/>  Windsor, Connecticut
                            </div>
                            <div className="contact-icons">
                                <a className="contact-us" href="mailto:Oneilorodney@gmail.com">
                                    <i className="fa-regular fa-envelope"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://www.linkedin.com/in/oneil-rodney">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                                <a className="contact-us" target="_blank" href="https://github.com/Oneil-R">
                                    <i className="fa-brands fa-github"/>
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <button 
                            className="contacts-button"
                            type="button"
                                onClick={
                                    () => {
                                        navigate('/Oneil')
                                    }
                                }
                            >
                            Learn More
                        </button>
                    </div>
                    {/* Shafik */}
                    <div className="contacts">
                        <img 
                            src={Shafik} 
                            alt="Image of Shafik" 
                            className="contact-img" 
                        />
                        <div className="card-body text-center">
                            <h5 className="card-title diphylleia-regular text-white contact-header">
                                <strong>Shafik Bahou</strong>
                            </h5>
                            <div className="contact-text">
                                <i className="fa-solid fa-location-dot"/>  New York, New York
                            </div>
                            <div className="contact-icons">
                                <a className="contact-us" href="mailto:shafik@snbsystems.com">
                                    <i className="fa-regular fa-envelope"/>
                                </a>
                                <a className="contact-us" href="https://www.linkedin.com/in/shafikbahou/">
                                    <i className="fa-brands fa-linkedin"/>
                                </a>
                                <div className="popup-wrap">
                                    <img 
                                        src={NoGit} 
                                        alt="Image of GitHub icon with red circle and line indicating no GitHub profile is available." 
                                        className="no-git-img"  
                                    />
                                    <div className="popup-content">
                                        No Repo Available. 😔
                                    </div> 
                                </div>
                            </div>
                            <hr/>
                            <button 
                                className="contacts-button"
                                type="button"
                                    onClick={
                                        () => {
                                            navigate('/Shafik')
                                        }
                                    }
                                >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

