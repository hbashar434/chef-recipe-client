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
        setError("User-not-found: email or password doesn't match");
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
        setError("Failed to login, try again");
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
        console.log(errorMessage);
        setError("Failed to login, try again");
      });
  };
  return (
    <div className="hero min-h-screen bg-base-100 pb-24">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Login now!</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogin}>
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
              <p className="text-error text-sm">{error}</p>
              <div className="form-control mt-6">
                <button className="btn bg-orange-400 border-none hover:bg-orange-500">
                  Login
                </button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline border-orange-500 hover:bg-orange-500 hover:border-none"
            >
              {" "}
              <span className="mr-2">
                <FcGoogle size={"30px"}></FcGoogle>
              </span>
              Sign In With Google
            </button>
            <button
              onClick={handleGithubSignIn}
              className="btn btn-outline border-orange-500 hover:bg-orange-500 hover:border-none mt-3"
            >
              {" "}
              <span className="mr-2">
                <BsGithub size={"30px"}></BsGithub>
              </span>
              Sign In With Github
            </button>
            <label>
              New to Chef&apos;s Table?
              <Link
                to="/register"
                className="label-text-alt underline pl-2 text-lg font-semibold hover:text-orange-600"
              >
                Create an Account
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
