import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import plant from "../../img/plant.png";
import "../../styles/subscriptionPages.css"
import "../../styles/index.css";

export const ClientSubscription = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = sessionStorage.getItem("token");
		if (token) {
			navigate("/client-subscription");
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
						className="btn btn-success mb-3 col-6 rounded-pill"
						onClick={
							() => {
								navigate('/client-signup')
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