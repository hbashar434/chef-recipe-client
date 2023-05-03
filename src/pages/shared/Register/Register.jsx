import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser, createProfile } = useContext(AuthContext);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setEmailError(" ");
    setPasswordError(" ");

    if (emailError) {
      e.target.email.focus();
      return;
    } else if (passwordError) {
      e.target.password.focus();
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        email
      )
    ) {
      setEmailError("Please provide a valid email");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    } else if (!/(?=.*\d)/.test(password)) {
      setPasswordError("Password must contain at least one digit");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        createProfile(name, photo)
          .then(() => {
            console.log("profile updated");
            form.reset();
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Register now!</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
              <p className="text-error">{emailError}</p>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="input input-bordered"
              />
              <p className=" text-error">{passwordError}</p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <label className="label">
              <Link to="/login" className="label-text-alt link link-hover">
                Already have an account? Please Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
