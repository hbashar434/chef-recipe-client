import React from "react";
import Lottie from "lottie-react";
import imgLazy from "../../../assets/imgLazy.json";

const LazyLoading = () => {
  return (
    <div className="w-48 h-64">
      <Lottie animationData={imgLazy} loop={true}></Lottie>
    </div>
  );
};

export default LazyLoading;
