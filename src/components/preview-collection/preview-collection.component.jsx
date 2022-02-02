import React from "react";

const CollectionPreview = (title) => {
  //console.log(title);
  return (
    <div className="collection-preview">
      <h1 className="title">{/*title.toUpperCase()*/}</h1>
      <div className="preview"></div>
    </div>
  );
};

export default CollectionPreview;
