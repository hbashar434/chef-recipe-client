import React from "react";
import Lottie from "lottie-react";
import loading from "../../../assets/loading.json";
const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Lottie
        animationData={loading}
        loop={true}
        className=" w-3/12 md:w-1/12"
      ></Lottie>
    </div>
  );
};

export default Loading;
