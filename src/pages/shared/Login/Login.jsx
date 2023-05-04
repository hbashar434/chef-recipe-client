import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Login now!</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <p className="text-error">{error}</p>
            <div className="form-control mt-6">
              <button className="btn bg-orange-400 border-none hover:bg-orange-300">
                Login
              </button>
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-orange-300 hover:bg-orange-300 hover:border-none"
            >
              {" "}
              <span className="mr-2">
                <FcGoogle size={"30px"}></FcGoogle>
              </span>
              Sign In With Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn btn-outline border-orange-300 hover:bg-orange-300 hover:border-none"
            >
              {" "}
              <span className="mr-2">
                <BsGithub size={"30px"}></BsGithub>
              </span>
              Sign In With Github
            </button>
            <label className="label">
              <Link to="/register" className="label-text-alt link link-hover">
                New to Chef's Table? Create An Account
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
