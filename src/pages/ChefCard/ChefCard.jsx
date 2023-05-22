import React, { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails/ChefDetails";
import Loading from "../shared/Loading/Loading";

const ChefCard = () => {
  const [chef, setChef] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetch("https://chef-recipe-server-psi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        setChef(data);
        setSpinner(false);
      });
  }, []);
  if (spinner) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-base-100">
      <div className="px-8 py-12 md:py-24">
        <h1 className="text-4xl font-bold text-blue-500 text-center">
          Meet Our Chef&apos;s
        </h1>
        <h3 className="text-2xl font-bold text-blue-500 text-center mb-8">
          The Culinary Maestro: An Introduction to Our Expert Chef
        </h3>
        <div className="grid justify-center md:mx-16 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chef.map((singleChef) => (
            <ChefDetails
              key={singleChef._id}
              singleChef={singleChef}
            ></ChefDetails>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
