import React from "react";
import Card from "./Card";

const Pricing = () => {
  const prisingPlans = [
    { image: "", title: "", action: "", desc: "" },
    { image: "", title: "", action: "", desc: "" },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Our Pricing Plans</h1>
      <div className="row">
        <div className="col-md-4">
          <Card
            cardStyle="border-secondary bg-secondary text-white"
            image="https://via.placeholder.com/150"
            title="Basic Plan"
            buttonAction={() => alert("Basic Plan")}
            description="Perfect for Individuals starting out."
          />
        </div>
        <div className="col-md-4">
          <Card
            image="https://via.placeholder.com/150"
            title="Pro Plan"
            buttonAction={() => alert("Pro Plan")}
            description="Perfect for Individuals starting out."
          />
        </div>
        <div className="col-md-4">
          <Card
           cardStyle="border-success bg-success text-white"
            image="https://via.placeholder.com/150"
            title="Enterprise Plan"
            buttonAction={() => alert("Enterprise Plan")}
            description="Perfect for Individuals starting out."
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
