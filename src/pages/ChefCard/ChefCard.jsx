import React, { useEffect, useState } from "react";
import ChefDetails from "./ChefDetails/ChefDetails";

const ChefCard = () => {
  const [chef, setChef] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/chef")
      .then((res) => res.json())
      .then((data) => setChef(data));
  }, []);
  return (
    <div className="mt-24 px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {chef.map((person) => (
        <ChefDetails key={person._id} person={person}></ChefDetails>
      ))}
    </div>
  );
};

export default ChefCard;
