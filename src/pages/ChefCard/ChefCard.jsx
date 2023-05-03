import React, { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails/ChefDetails";

const ChefCard = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-server-psi.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="mt-24 px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {chef.map((singleChef) => (
        <ChefDetails key={singleChef._id} singleChef={singleChef}></ChefDetails>
      ))}
    </div>
  );
};

export default ChefCard;
