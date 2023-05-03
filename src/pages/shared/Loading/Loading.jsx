import React from "react";
import Lottie from "lottie-react";
import loading from "../../../assets/loading.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Lottie animationData={loading} loop={true} className="w-96"></Lottie>
    </div>
  );
};

export default Loading;
