import React from "react";

const Square = ({img, text}) => {
  return (
    <div className="flex items-center">
      <a href="#" className="flex items-center">
        <img src={img} className="w-10 h-8 mr-2 mb-4" />
        <span>{text}</span>
      </a>
    </div>
  );
};

export default Square;
