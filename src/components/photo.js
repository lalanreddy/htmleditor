import React from "react";

const imgWithClick = { cursor: "pointer" };

const Photo = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin,width:"100px",height:"100px",marginRight:"30px",padding:"10px",background:"orange" };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
    />
  );
};

export default Photo;
