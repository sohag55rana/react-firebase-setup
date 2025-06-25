import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { users } = useContext(AuthContext)
    if (users && users?.email) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivetRoute;