import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Navbar = () => {

    const { users, signOutUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleSignout = e => {
        e.preventDefault()

        signOutUser().
            then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.error(error);

                // An error happened.
            });

    }


    // console.log(user);
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-3xl">FireBase Setup</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-xl font-bold">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/example">Example</Link></li>
                    {
                        users && <li><Link to="/hideExam">HideExample</Link></li>
                    }

                </ul>
            </div>
            <div className="navbar-end">
                {
                    users ? <><span className='mr-10'>(user: {users.email})</span> <button onClick={handleSignout} className="btn btn-primary">sign out</button></> : <button onClick={() => navigate('/login')} className="btn btn-primary">Login</button>
                }
            </div>
        </div>
    );
};

export default Navbar;