import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <div className="container mx-auto mt-10 space-y-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;