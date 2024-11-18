//rafce
import React from "react";

const AlertMessage = (props) => { // props.type
  return (
    <div className={`alert alert-${props.type}`}>
        {props.icon && <span className="me-2">{props.icon}</span>}
      {props.message}
    </div>
  );
};

export default AlertMessage;
