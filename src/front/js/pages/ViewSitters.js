import React, { useContext } from "react";
import { Context } from "../store/appContext";
import PlantSitterCard from "../component/PlantSitterCard";
import clientSignUp from "../../img/client-sign-up.png";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/index.css";
import "../../styles/viewSittersAndJobs.css";

export const ViewSitters = () => {
    const { store } = useContext(Context);
    const sitters = store.sitters || [];
    const navigate = useNavigate();

    const handleButtonClick = () => {
        if (store.token) {
            navigate("/client-services1");
        } else {
            navigate("/client-signup1");
        }
    };

    return (
        <div className="signup-container">
            <h1 className="diphylleia-regular job-count">
                <strong>There are {sitters.length} Plant Sitters near you!</strong>
            </h1>

            <div className="d-flex row available">
                {sitters.length > 0 ? (
                    sitters.map((sitter) => (
                        <PlantSitterCard key={sitter.id} sitter={sitter} />
                    ))
                ) : (
                    <div className="none-available">
                        <p>No sitters found near your location...</p>
                    </div>
                )}
            </div>

            <div className="hero-image">
                <img className="bkgd-img" src={clientSignUp} alt="Client Sign Up" />
                <div className="view-sitters-text row">
                    <h3 className="diphylleia-regular signup-header">
                        <strong>Take comfort knowing that</strong>
                    </h3>
                    <h3 className="diphylleia-regular signup-header">
                        <strong>our service is...</strong>
                    </h3>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Safe</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Find and hire vetted, qualified help near you.
                    </p>
                    <p className="sign-up-text">
                        🌿 Background checks completed for all plant sitters.
                    </p>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Affordable</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Pay a small, montly fee to post unlimited jobs.
                    </p>
                    <p className="sign-up-text">
                        🌿 Choose your own rate per job.
                    </p>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Convenient</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Cancel any time.
                    </p>
                    <p className="sign-up-text">
                        🌿 Hire only the help you need, when you need it.
                    </p>
                </div>
            </div>

            <button
                type="button"
                className="btn subscribe rounded-pill"
                onClick={handleButtonClick}
            >
                <h3 className="diphylleia-regular button-text">
                    <strong>{store.token ? "Create a Job Post" : "Subscribe Now"}</strong>
                </h3>
            </button>
        </div>
    );
};