import React from "react";

import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size}`}>
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
};
