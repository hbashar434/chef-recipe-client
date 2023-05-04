import React from "react";
import errorImage from "../../../assets/errorImage.jpg";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="grid justify-center">
      <img
        className="max-h-[calc(100vh-136px)]"
        src={errorImage}
        alt="error image"
      />
      <Link to="/" className="text-center">
        <button className="btn bg-orange-300 border-none hover:bg-orange-400 normal-case text-lg">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
