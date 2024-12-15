import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import "../../styles/footer.css";


export const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className="footer-container">
			<footer className="footer">
				<p>
					<button 
						className="contact-link"
						onClick={() => navigate("/contact-us")}
					>
						Contact Us  <i className="fa-brands fa-pagelines"></i>
					</button>
				</p>
			</footer>
		</div>
	)
};
