import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import "../../styles/client-location.css";

export const ClientLocation = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [zipCode, setZipCode] = useState("");

    const handleSearch = async () => {
        if (zipCode) {
            const res = await actions.searchSitters(zipCode);
            if (res.success) {
                navigate('/view-sitters');
            }
             else {
                navigate('/view-sitters');
                // alert("No sitters found near your location.");
            }
        } else {
            alert("Please enter a valid ZIP code.");
        }
    };

    return (
        <div className="text-center client-location-container">
            <h1 className="diphylleia-regular">Where are you located?</h1>
            <div className="text-center mb-1">
                <p>Already have an account? <a href="/login"><u>Log in</u></a> to skip</p>
            </div>
            <form>
                <div className="row container address">
                    <input
                        placeholder=" ZIP code"
                        type="text"
                        id="zipcode"
                        className="input-field rounded"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div>
                <p></p>
            </form>
            <button
                type="button"
                className="btn btn-success mt-3 col-2 rounded-pill"
                onClick={handleSearch}
            >
                Next
            </button>
        </div>
    );
};