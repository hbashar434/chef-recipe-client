import React from "react";
import errorImage from "../../../assets/errorImage.jpg";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="grid justify-center md:mt-24">
      <img
        className="h-96"
        src={errorImage}
        alt="error image"
      />
      <Link to="/" className="text-center">
        <button className="btn bg-blue-500 border-none hover:bg-blue-500 normal-case text-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
