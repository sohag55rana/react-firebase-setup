import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const { createUser, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState("")
    const [Emailerror, setEmailError] = useState("")
    const navigate = useNavigate()
    // const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9@$!%*?&]{6,}$/;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleGoogle = e => {
        e.preventDefault();
        console.log('google');
        googleSignIn()
            .then(result => {
                console.log(result.user)
                console.log('login success')
            })
            .catch(error => {
                console.error(error);
            })
    }


    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, photo, email, password, confirm);

        if (password.length < 6) {
            setError("Password must be 6 Letters")
            return
        }
        if (password !== confirm) {
            setError("Password didn't match")
            return
        }
        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address (e.g., user@example.com)")
            return
        }
        // if (!regexPassword.test(password)) {
        //     setError('Password At least 6 Caracters long, 1 uppercase, 1 lowercase')
        //     return;
        // }
        setError('')
        setEmailError('')

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();
            })
            .catch(error => {
                console.error(error);

            })
    }


    return (
        <div className="hero bg-blue-200 ">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Please Register Now here, then you can work here properly
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <p className="text-center">Already have account?<button onClick={() => navigate('/login')} className="btn bg-white text-black border-[#e5e5e5] text-center">
                        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Login
                    </button> here</p>
                    <div className="card-body">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" name="name" placeholder="Name" />

                            <label className="label">Photo</label>
                            <input type="text" className="input space-y-5" name="photo" placeholder="Photo Link" />

                            <label className="label">Email</label>
                            <input type="email" className="input" name="email" placeholder="Email" />
                            {
                                Emailerror && <small className="text-red-800">{Emailerror}</small>
                            }

                            <label className="label">Password</label>
                            <input type="password" name="password" className="input space-y-5" placeholder="Password" />

                            <label className="label">Confirm Password</label>
                            <input type="password" name="confirm" className="input space-y-5" placeholder="Confirm Password" />

                            {
                                error && <small className="text-red-800">{error}</small>
                            }

                            <button className="btn btn-neutral mt-4">Register</button>
                        </form>
                        <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                            Login with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;