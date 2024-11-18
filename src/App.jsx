import React from "react";
import AlertMessage from "./components/AlertMessage";
import Card from "./components/Card";
import { FaCheckCircle  } from "react-icons/fa";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Pricing from "./components/Pricing";

const App = () => {
  const apiResposne = {
    status: 200,
    message: "Valid Inputs",
  };

  const handelClick = (msg) => {
    alert(msg);
  }
  return (
    <>
      {apiResposne && apiResposne.status === 200 && (
        <AlertMessage icon={<FaCheckCircle />} type="success" message={apiResposne.message} />
      )}
      {apiResposne && apiResposne.status === 400 && (
        <AlertMessage icon={<BsFillInfoCircleFill />} type="danger" message={apiResposne.message} />
      )}

      <Pricing />
    </>
  );
};

export default App;
