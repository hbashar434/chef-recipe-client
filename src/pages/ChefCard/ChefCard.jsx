import React, { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails/ChefDetails";
import { useNavigation } from "react-router-dom";
import Loading from "../shared/Loading/Loading";

const ChefCard = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }
  const [chef, setChef] = useState([]);
  useEffect(() => {
    fetch("https://chef-recipe-server-psi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="bg-base-200">
      <div className="px-8 md:py-24 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
