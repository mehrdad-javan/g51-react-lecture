import React from "react";

const Card = ({title, image, description, buttonAction, cardStyle}) => {
  return (
    <div className={`card ${cardStyle}`} style={{width:'350px'}}>
      <div className="card-header">
        <img src={image} className="card-img-top" title={title} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul>
            <li>Demo List Item</li>
        </ul>
      </div>
      <button className="btn btn-primary" onClick={buttonAction}>Click Me</button>
    </div>
  );
};

export default Card;
