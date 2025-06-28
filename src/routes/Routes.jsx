import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRoute from "../components/PrivetRoute";
import Example from "../components/Example";
import HideExam from "../components/HideExam";
import ReactHookRegister from "../components/ReactHookForm/ReactHookRegister";
import ReactHookLogin from "../components/ReactHookForm/ReactHookLogin";

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
                path: "/reactHookRegister",
                element: <ReactHookRegister></ReactHookRegister>
            },
            {
                path: "/reactHookLogin",
                element: <ReactHookLogin></ReactHookLogin>
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