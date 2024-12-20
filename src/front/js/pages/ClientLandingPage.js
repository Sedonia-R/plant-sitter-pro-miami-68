import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import noImage from "../../img/noImage.png";
// import ScissorsLoader from "../component/ScissorsLoader";
import "../../styles/index.css";
import "../../styles/clientAndSitterLanding.css";

export const ClientLandingPage = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [jobPosts, setJobPosts] = useState([]);
    const [picture, setPicture] = useState(null);
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const firstName = store.user?.first_name;
    const lastName = store.user?.last_name;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            if (!store.user) {
                await actions.getUser();
            }

            if (store.user) {
                const result = await actions.getUser();
                    if (result.success && result.data) {
                        setCity(result.data.city);
                        setState(result.data.state);
                    }
                    const res = await actions.getUserJobPosts();
                    if (res.success && res.data) {
                        setJobPosts(res.data);
                        setPicture(res.data.profile_picture_url);
                    }
            }
            setLoading(false);
        };

        fetchData();
    }, []);

    // if (loading) {
    //     return <ScissorsLoader />;
    // }

    // console.log(jobPosts);

    const handleViewJobPost = (jobPostId) => {
        navigate(`/job-post-preview/${jobPostId}`);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="client-landing-container">
            <h1 className="diphylleia-regular"><strong>{firstName} {lastName}</strong></h1>            <div className="text-end">
                <h4 className="diphylleia-regular mb-1"><strong>{city}, {state}</strong></h4>
                <h4 className="diphylleia-regular mb-0">Subscriber Since</h4>
                <h4 className="diphylleia-regular mt-0">October 2024</h4>
            </div>
            <hr/>
            <div>
                <h3 
                    className="diphylleia-regular apply-link"
                    onClick={() => navigate('/job-posts')}
                >
                    <strong>View Current / Published Jobs</strong>
                </h3>
                <h3 className="diphylleia-regular mb-3 text-center"><strong>Edit Your Open Job Posts</strong></h3 >
                <div
                    className="upload-job"
                    onClick={() => {
                        actions.clearJobPostId();
                        navigate("/client-services")}
                    }
                >
                    <i className="fa fa-plus fa-6x plus-sign"></i>
                </div>
                <div className="posts-row">
                    {jobPosts.map((post) => (
                        <div className="job-cards" key={post.id} onClick={() => handleViewJobPost(post.id)}>
                            <div className="card" style={{ backgroundColor: "rgb(70, 108, 70)", borderRadius: "15px", minHeight: "100%" }}>
                                <img
                                    src={post.profile_picture_url || noImage}
                                    alt="Job Profile Picture"
                                    className="card-img-top"
                                />
                                <div className="card-body">
                                    <div className="job-post-card-title text-white diphylleia-regular">
                                        <strong>{post.first_name} {post.last_name}</strong>
                                    </div>
                                    <div className="card-text text-white">
                                        <strong>Job Address:</strong> {post.location || 'Location not provided'}
                                    </div>
                                    <div className="card-text text-white">
                                        <strong>Dates:</strong> {formatDate(post.start_date)} - {formatDate(post.end_date)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
                <div className="container mt-3">
                    <h3 
                        className="diphylleia-regular apply-link"
                        onClick={() => navigate('/completed-jobs-page')}
                    >
                        <strong>View Completed Jobs</strong>
                    </h3>
                </div>
            </div>
        </div>
    );
};
