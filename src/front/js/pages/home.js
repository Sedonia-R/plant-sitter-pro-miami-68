import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/index.css";
import ServicesCarousel from "../component/ServicesCarousel";
import { useNavigate } from "react-router-dom";
import landing2 from "../../img/landing-page2.png";
import howitworks from "../../img/howitworks.png";
import helping from "../../img/helping.png";
import helping2 from "../../img/helping2.png";
import forOwners from "../../img/for-owners.png";
import client from "../../img/client.png";
import profilepic from "../../img/profilePicture.png";
import sitter1 from "../../img/sitter1.png";
import sitter2 from "../../img/sitter2.png";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	return (
		<>
			<div className="hero-image">
				<img className="landing-page" src={landing2} />
				<div className="hero-text">
					<div className="hero-container">
						<div className="hero-header">
							<h1 className="diphylleia-regular lp-headers">We connect plant owners</h1>
							<h1 className="diphylleia-regular lp-headers">with plant caretakers</h1>
						</div>
						
						<div className="row owner-and-caretaker-container">
							<div className="col-6 get-started">
								<h1
									className="diphylleia-regular lp-subheader"
								>
									Owners
								</h1>
								<h4 className="lp-subtext">🌿Going out of town?</h4>
								<h4 className="lp-subtext">🌿Need help with pests?</h4>
								<h4 className="lp-subtext pb-2">🌿Love plants, but kill them?</h4>
								<button
									type="button"
									className="btn col-12 rounded-pill home-button"
									onClick={
										() => {
											actions.clearJobPostId();
											navigate('/client-location')
										}
									}
								>
									<h3
										className="diphylleia-regular button-text"
									>
										<strong>Find Help</strong>
									</h3>
								</button>
							</div>
							<div className="col-6 get-started">
								<h1 className="diphylleia-regular lp-subheader"
								>
									Caretakers
								</h1>
								<h4 className="lp-subtext">🌿Looking for work?</h4>
								<h4 className="lp-subtext">🌿Got a green thumb?</h4>
								<h4 className="lp-subtext pb-2">🌿Experienced with plant care?</h4>
								<button
									type="button"
									className="btn col-12 rounded-pill home-button"
									onClick={
										() => {
											navigate('/provider-location')
										}
									}
								>
									<h3
										className="diphylleia-regular button-text"
										style={{ fontSize: "2vw" }}
									>
										<strong>Find Jobs</strong>
									</h3>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="diphylleia-regular carousel-header mt-3 mb-2"><strong>Get Help With...</strong></div>
			<div className="mt-2 mb-2">
				<ServicesCarousel />
			</div>

			<div className="hero-image mt-3">
				<img className="landing-page for-owners" src={forOwners} />
				<div className="owner-text">
					<div className="row d-flex button-container">
						<div className="row-header">
							<h1 className="diphylleia-regular lp-headers" id="how-it-works"><strong>How it works</strong></h1>
						</div>
						<div className="container row-button">
							<button
								type="button"
								className="btn rounded-pill mt-2 client-and-sitter-buttons"
								onClick={
									() => {
										actions.clearJobPostId();
										navigate('/client-location')
									}
								}
							>
								<h3
									className="diphylleia-regular button-text"
									style={{ fontSize: "2vw" }}
								>
									<strong>Browse Now</strong>
								</h3>
							</button>
						</div>
					</div>

					<div className="diphylleia-regular icon-with-text"><img className="hand-holding-plant-icon" src={helping2} /> Hiring Help</div>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>1. See who works in your area 🌿 </strong></h4>
					<p className="client-and-sitter-text">All of our plant sitters are background checked. Browse available profiles in your area for free.</p>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>2. Sign up for an account and tell us about your needs 🌿 </strong></h4>
					<p className="client-and-sitter-text">Share what kind of help you need and when you need it.</p>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>3. Post jobs and secure the plant care services that you need 🌿 </strong></h4>
					<p className="client-and-sitter-text">Plant sitters apply to jobs that you post and you choose who to hire.</p>
				</div>
			</div>

			<h1 className="diphylleia-regular text-center carousel-header mt-4"><strong>Meet Some of Our Plant Sitters...</strong></h1>
			<div className="row plant-sitters">
				<img className="sitter-pics" src={client} />
				<img className="sitter-pics" src={profilepic} />
				<img className="sitter-pics" src={sitter1} />
				<img className="sitter-pics" src={sitter2} />
			</div>

			<div className="hero-image mt-4">
				<img className="landing-page" src={howitworks} />
				<div className="sitter-text">
					<div className="row d-flex button-container">
						<div className="container col-3 row-button">
							<button
								type="button"
								className="btn col-12 rounded-pill mt-2 client-and-sitter-buttons"
								onClick={
									() => {
										navigate('/provider-location')
									}
								}
							>
								<h3
									className="diphylleia-regular text-center button-text"
									style={{ fontSize: "2vw" }}
								>
									<strong>Sign Up Now</strong>
								</h3>
							</button>
						</div>
						<div className="row-header">
							<h1 className="diphylleia-regular lp-headers"><strong>How it works</strong></h1>
						</div>
					</div>

					<h1 className="diphylleia-regular icon-with-text">Becoming a Plant Sitter <img  className="hand-holding-plant-icon" src={helping} /></h1>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>🌿 1. Register with our service and pass a background check</strong></h4>
					<p className="client-and-sitter-text">Background check included with sign-up fee.</p>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>🌿 2. Tell us about your qualifications, education, and experience</strong></h4>
					<p className="client-and-sitter-text">Professional experience is great, but not required.</p>
					<h4 className="diphylleia-regular client-and-sitter-headers"><strong>🌿 3. Browse and apply for available jobs in your area.</strong></h4>
					<p className="client-and-sitter-text">Chat directly with plant owners near you and choose jobs that work for you.</p>
				</div>
			</div>
		</>
	);
};
