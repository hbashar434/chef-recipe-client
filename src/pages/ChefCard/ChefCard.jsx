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
    <div className="bg-base-200">
      <div className="px-8 py-12 md:py-32 grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chef.map((singleChef) => (
          <ChefDetails
            key={singleChef._id}
            singleChef={singleChef}
          ></ChefDetails>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
