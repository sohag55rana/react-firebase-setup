import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { users } = useContext(AuthContext)
    const location = useLocation()
    if (users && users?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }}>Login</Navigate>
};

export default PrivetRoute;