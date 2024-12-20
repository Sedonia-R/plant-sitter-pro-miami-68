import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";
import { Home } from "./pages/Home.js";
import { ContactUs } from "./pages/ContactUs";
import { Single } from "./pages/single";
import { ProviderProfile } from "./pages/providerProfile";
import { SitterLocation } from "./pages/SitterLocation.js";
import injectContext from "./store/appContext";
import { SitterSignUp } from "./pages/SitterSignUp.js";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import { SitterServices } from "./pages/SitterServices";
import { ProviderProfileCompleted } from "./pages/providerProfileCompleted";
import { ClientLocation } from "./pages/ClientLocation";
import { ClientSubscription } from "./pages/ClientSubscription.js";
import { ClientSignUp } from "./pages/ClientSignUp.js";
import { ClientServices } from "./pages/ClientServices";
import { JobPost1 } from "./pages/jobPost";
import { JobPost2 } from "./pages/jobPostPreview";
import { JobPostUpdate } from "./pages/JobPostUpdate";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login.js";
import { ViewJobs } from "./pages/ViewJobs.js";
import { Blog } from "./pages/Blog";
import AccountSettings from "./pages/AccountSettings.js"
import { PersonalInfo } from "./pages/PersonalInfo"
import PersonalSecurity from "./pages/loginsecurity"
import PaymentsPayouts from "./pages/PaymentsPayouts.js"
import { JobPostsList } from "./pages/JobPostsList"
import WateringService from "./pages/WateringService";
import RepottingService from "./pages/RepottingService";
import PruningService from "./pages/PruningService";
import PestControlService from "./pages/PestControlService";
import PlantCleaningService from "./pages/PlantCleaningService";
// import Chat from './component/Chat';
import { PlantSitterProfile } from './pages/PlantSitterProfile';
import { AccountVerification } from "./pages/AccountVerification";
import { EnterNewPassword } from "./pages/EnterNewPassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { ViewSitters } from "./pages/ViewSitters.js";
import { Cancel } from "./pages/cancel";
import { ProviderLandingPage } from "./pages/providerLandingPage";
import { ClientLandingPage } from "./pages/clientLandingPage";
import { ViewPlantSitterProfile } from "./pages/ViewPlantSitterProfile";
import { PublishedJobPosts } from "./pages/publishedJobPost";
import { JobsInProgress } from "./pages/jobsInProgress";
import { ViewApplicants } from "./pages/jobApplicants";
import { ProfileSuccessPage } from "./pages/profileSuccessPage";
import { CompletedJobsPage } from "./pages/completedJobsPage";
import { ClientServicesUpdate } from "./pages/clientServicesUpdate";
import { Trimming } from "./pages/ExampleLoading.js";
import { SitterSubscription } from "./pages/SitterSubscription.js";
import { ApplicantProfiles } from "./pages/applicantProfiles.js";
import { AboutSedonia } from "./pages/Sedonia.js";
import { AboutCesar } from "./pages/Cesar.js";
import { AboutGerry } from "./pages/Gerry.js";
import { AboutOneil } from "./pages/Oneil.js";
import { AboutShafik } from "./pages/Shafik.js";
import { Terms } from "./pages/Terms.js";

const Layout = () => {
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ContactUs />} path="/contact-us" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<SitterServices />} path="/sitter-services" />
                        <Route element={<ClientServices />} path="/client-services" />
                        <Route element={<JobPost1 />} path="/job-post" />
                        <Route element={<JobPostUpdate />} path="/job-post-update/:job_post_id" />
                        <Route element={<ClientServicesUpdate />} path="/client-services-update/:job_post_id" />
                        <Route element={<JobPost2 />} path="/job-post-preview/:job_post_id" />
                        <Route element={<ProviderProfile />} path="/provider-profile" />
                        <Route element={<ProviderProfileCompleted />} path="/provider-profile-completed" />
                        <Route element={<SitterLocation />} path="/sitter-location" />
                        <Route element={<ClientLocation />} path="/client-location" />
                        <Route element={<ViewSitters />} path="/view-sitters" />
                        <Route element={<ClientSubscription />} path="/client-subscription" />
                        <Route element={<SitterSignUp />} path="/sitter-signup" />
                        <Route element={<ClientSignUp />} path="/client-signup" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<SignUp />} path="/signup" />
                        <Route element={<ViewJobs />} path="/view-jobs" />
                        <Route element={<Blog />} path="/blog" />
                        <Route element={<WateringService />} path="/watering" />
                        <Route element={<RepottingService />} path="/repotting" />
                        <Route element={<PruningService />} path="/pruning" />
                        <Route element={<PestControlService />} path="/pestcontrol" />
                        <Route element={<PlantCleaningService />} path="/plantcleaning" />
                        <Route element={<AccountSettings />} path="/account-settings" />
                        <Route element={<PersonalInfo />} path="/personal-info" />
                        <Route element={<PersonalSecurity />} path="/login-security" />
                        <Route element={<PaymentsPayouts />} path="/payments-payouts" />
                        <Route element={<PlantSitterProfile />} path="/plantsitter/:id" />
                        <Route element={<JobPostsList />} path="/job-posts" />
                        <Route element={<AccountVerification />} path="/verification" />
                        <Route element={<ForgotPassword />} path="/forgot-password" />
                        <Route element={<EnterNewPassword />} path="/enternewpassword" /> {/* Change to enter-new-password? Need to correct all uses in app */}
                        <Route element={<Cancel />} path="/cancel" />
                        <Route element={<ProviderLandingPage />} path="/provider-landing" />
                        <Route element={<ClientLandingPage />} path="/client-landing" />
                        <Route element={<ViewPlantSitterProfile />} path="/plantsitter/:id" />
                        <Route element={<PublishedJobPosts />} path="/published-job-posts/:job_post_id" />
                        <Route element={<JobsInProgress />} path="/jobs-in-progress/:id" />
                        <Route element={<ViewApplicants />} path="/view-applicants/:job_post_id" />
                        <Route element={<ProfileSuccessPage />} path="/profile-success-page" />
                        <Route element={<CompletedJobsPage />} path="/completed-jobs-page" />
                        <Route element={<Trimming />} path="/trimming" />
                        <Route element={<AboutSedonia />} path="/Sedonia" />
                        <Route element={<AboutCesar />} path="/Cesar" />
                        <Route element={<AboutGerry />} path="/Gerry" />
                        <Route element={<AboutOneil />} path="/Oneil" />
                        <Route element={<AboutShafik />} path="/Shafik" />
                        <Route element={<SitterSubscription />} path="/sitter-subscription" />
                        <Route element={<ApplicantProfiles />} path="/applicant-profiles/:sitter_id" />
                        <Route element={<Terms />} path="/terms-and-conditions" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    {/* <Chat /> */}
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);