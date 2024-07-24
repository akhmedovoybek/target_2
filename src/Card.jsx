import React from "react";

function Card(props) {
  return (
    <div className="shadow-2xl bg-gray-200 rounded-xl max-w-80">
      <div className="p-7">
        <h3 className="text-2xl text-gray-800 mt-5 font-semibold">{props.name}</h3>
        <p className="text-xl text-gray-800 mt-2"></p>
      </div>
    </div>
  );
}

export default Card;
