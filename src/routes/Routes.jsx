import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRoute from "../components/PrivetRoute";
import Example from "../components/Example";
import HideExam from "../components/HideExam";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/example",
                element: <PrivetRoute><Example></Example></PrivetRoute>
            },
            {
                path: "/hideExam",
                element: <PrivetRoute><HideExam></HideExam></PrivetRoute>
            },
        ]
    },
]);