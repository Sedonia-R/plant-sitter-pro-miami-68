import React, { useContext } from "react";
import { Context } from "../store/appContext";
import noImage from "../../img/noImage.png";
import sitterSignUp from "../../img/view-jobs.png";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";
import "../../styles/index.css";
import "../../styles/viewSittersAndJobs.css";

export const ViewJobs = () => {
    const { store } = useContext(Context);
    const jobPosts = store.jobPosts || [];
    const navigate = useNavigate();

    return (
        <div className="signup-container">
            <h1 className="diphylleia-regular job-count">
                <strong>There are {jobPosts.length} jobs available near you!</strong>
            </h1>

            <div className="d-flex row available">
                {jobPosts.length > 0 ? (
                    jobPosts.map((jobPost) => (
                        <div 
                            key={jobPost.id} 
                            className="col-md-4 mb-4"
                        >
                            <div 
                                className="card" 
                                style={{ backgroundColor: "rgb(70, 108, 70)", borderRadius: "15px", minHeight: "100%" }}
                            >
                                <img
                                    src={jobPost.profile_picture_url || noImage}
                                    alt={`${jobPost.first_name} ${jobPost.last_name}`}
                                    className="card-img-top"
                                    style={{
                                        borderRadius: "25px",
                                        width: "90%",
                                        height: "375px",
                                        objectFit: "cover",
                                        margin: "auto",
                                        marginTop: "20px"
                                    }}
                                />
                                <div className="card-body">
                                    <h3 className="card-title text-white diphylleia-regular fs-2">
                                        <strong>{jobPost.first_name} {jobPost.last_name}</strong>
                                    </h3>
                                    <div className="card-text text-white fs-5">
                                        <strong>Job Location:</strong> {jobPost.location || 'Location not provided'}
                                    </div>
                                    <div className="card-text text-white fs-5">
                                        <strong>Dates:</strong> {new Date(jobPost.start_date).toLocaleDateString()} - {new Date(jobPost.end_date).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="none-available">
                        <p>No job posts found near your location.</p>
                    </div>
                )}
            </div>

            <div className="hero-image">
                <img className="bkgd-img" src={sitterSignUp} alt="Plant Sitter Sign Up" />
                <div className="view-jobs-text row">                    
                    <h3 className="diphylleia-regular signup-header mb-2">
                        <strong>Benefits of Joining...</strong>
                    </h3>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Easy</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Easily search and apply for jobs in your area.
                    </p>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Convenient</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Choose only the jobs you want, when you want them.
                    <p className="sign-up-text">
                        🌿 Cancel any time.
                    </p>
                    </p>
                    <h4 className="diphylleia-regular signup-subheader">
                        <strong>✔️ Affordable</strong>
                    </h4>
                    <p className="sign-up-text">
                        🌿 Pay a modest fee to utilize our platform.
                    </p>
                </div>
            </div>

            <button
                type="submit"
                className="btn subscribe rounded-pill"
                onClick={() => navigate('/sitter-subscription-page')}
            >
                <h3 className="diphylleia-regular button-text">
                    <strong>Subscribe Now</strong>
                </h3>
            </button>
        </div>
    );
};