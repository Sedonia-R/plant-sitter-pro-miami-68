import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../component/PaymentForm";
import Payouts from "../component/Payouts";
import UnderConstruction from "../../img/under_construction.png";
import "../../styles/index.css";
import "../../styles/paymentsPayouts.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentsPayouts = () => {
  const [activeTab, setActiveTab] = useState("makePayments");

  return (
    <div className="payments-payouts-container">
      <div className="under-construction">
        <img 
          className="construction-img"
          src={UnderConstruction}
          alt="This page is under construction"
        />
      </div>
      <h1 className="text-center mb-4 diphylleia-regular"><strong>Payments & Payouts</strong></h1>
      {/* Nav Pills */}
      <ul className="nav nav-pills mb-4 justify-content-center">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "makePayments" ? "active" : ""}`}
            onClick={() => setActiveTab("makePayments")}
          >
            To Make Payments
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "payouts" ? "active" : ""}`}
            onClick={() => setActiveTab("payouts")}
          >
            Payouts for Plant Sitters
          </button>
        </li>
      </ul>

      <Elements stripe={stripePromise}>
        {activeTab === "makePayments" && <PaymentForm />}
        {activeTab === "payouts" && <Payouts />}
      </Elements>
    </div>
  );
};

export default PaymentsPayouts;