import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if (users) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}>Login</Navigate>
};

export default PrivetRoute;