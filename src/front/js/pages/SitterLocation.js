import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css";
import "../../styles/locationPages.css";

export const SitterLocation = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [zipCode, setZipCode] = useState("");
    const [distance, setDistance] = useState("");

    const handleSearch = async () => {
        if (zipCode && distance) {
            const res = await actions.searchJobPosts(zipCode, distance);
            if (res.success) {
                navigate('/view-jobs');
            } else {
                // alert("No job posts yet in your search area. Try expanding your search.");
                navigate('/view-jobs')
            }
        } else {
            alert("Please enter a valid ZIP code and distance.");
        }
    };

    return (
        <div className="text-center location-container">
            <div className="diphylleia-regular location-header">Where would you like to work?</div>
            <div className="text-center">
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
            </form>
            <div className="mt-4">
                <div className="diphylleia-regular location-header">How far are you willing to travel?</div>
                <input 
                    placeholder=" Ex: 15" 
                    type="number" 
                    id="distance" 
                    className="input-field rounded" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
            </div>
            <div>
                <label className="form-label mb-3">Miles</label>
            </div>
            <button
                type="button"
                className="location-button"
                onClick={handleSearch}
            >
                Next
            </button>
        </div>
    );
};