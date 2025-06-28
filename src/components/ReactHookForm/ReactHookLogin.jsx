import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { useForm } from "react-hook-form";


const ReactHookLogin = () => {

    const { signInUser, googleSignIn } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }
    const handleGoogle = e => {
        e.preventDefault()
        googleSignIn()
            .then(result => {
                console.log(result.user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);

            })
    }

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || '/';

    return (
        <div className="hero bg-blue-200 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Please Login Now here, then you can work here properly
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <p className="text-center">Don't have account?<button onClick={() => navigate('/register')} className="btn bg-white text-black border-[#e5e5e5] text-center">
                        <svg aria-label="Email icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="black"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                        Register
                    </button> here</p>

                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="fieldset">

                            <label className="label">Email</label>
                            <input type="email" name="email" className="input space-y-5" placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-500">This field is required</span>}

                            <label className="label">Password</label>
                            <input type="password" name="password" className="input space-y-5" placeholder="Password" {...register("password", { required: true })} />
                            {errors.password && <span className="text-red-500">This field is required</span>}

                            <div><a className="link link-hover">Forgot password?</a></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                        </form>
                        <div className="flex justify-center p-5 gap-5">
                            <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                {/* Login with Google */}
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReactHookLogin;