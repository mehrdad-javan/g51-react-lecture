import React, { useEffect, useState } from "react";

const ToggleButton = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    console.log("useEffect function has been executed!");
  }, []);

  const toggleButtonHandler = () => {
    console.log('toggleButtonHandler has been executed!');
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className="container-fluid">
      <nav className={`navbar ${isDarkMode ? "navbar-dark bg-dark" : "navbar-light bg-light" }`}>

        <img src={`${isDarkMode ? '../src/assets/logo-light.png' : '../src/assets/logo-dark.png'}`} title="logo" />
      </nav>

      <div className="container text-center py-5">
        <h1>{isDarkMode  ? 'Dark Mode is On'  : 'Light Mode is On'}</h1>
        <button className="btn btn-secondary" onClick={toggleButtonHandler}>Click Me</button>
      </div>
    </div>
  );
};

export default ToggleButton;
