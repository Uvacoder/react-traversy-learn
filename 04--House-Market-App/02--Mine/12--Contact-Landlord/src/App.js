import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { Fragment } from "react";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";
import CreateListing from "./pages/CreateListing";

const App = () => {
    return (
        <Fragment>
            <Router>
                <Routes>
                    <Route path="/" element={<Explore />} />
                    <Route path="/offers" element={<Offers />} />
                    <Route
                        path="/category/:categoryName"
                        element={<Category />}
                    />
                    <Route path="/profile" element={<PrivateRoute />}>
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/create-listing" element={<CreateListing />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route
                        path="/category/:categoryName/:listingId"
                        element={<Listing />}
                    />
                    <Route path="/contact/:landlordId" element={<Contact />} />
                </Routes>
                <Navbar />
            </Router>
            <ToastContainer />
        </Fragment>
    );
};

export default App;
