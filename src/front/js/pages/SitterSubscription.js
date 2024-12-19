import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import plant from "../../img/plant.png";
import "../../styles/subscriptionPages.css"
import "../../styles/index.css";

export const SitterSubscription = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (token) {
			navigate("/sitter-subscription");
		}
	}, [navigate]);

	return (
		<div className="subscription-container">
					<div className="subscription">
						<p className="diphylleia-regular subscription-header"><strong>Payment Page Goes Here</strong></p>
						<img className="plant" src={plant} />
						<div>
							<button
								type="button"
								onClick={
									() => {
										navigate('/sitter-signup')
									}
								}
							>
								Process Payment
							</button>
						</div>
					</div>
				</div>
	);
};