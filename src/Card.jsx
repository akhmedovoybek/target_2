import React from "react";

function Card(props) {
  
  return (
      <div
        className="shadow-2xl bg-gray-200 rounded-xl max-w-80 w-80"
      >
        <div className="p-7">
          <img src={props.img} alt="" className="h-20" />
          <h3 className="text-2xl text-gray-800 mt-5 font-semibold">
            {props.name}
          </h3>
          <p className="text-xl text-gray-800 mt-2">
            Ranking: <b>{props.ranking}</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            Location: <b>{props.location}</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            Tuition: <b>{props.tuition}$</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            SAT: <b>{props.sat}+</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            IELTS: <b>{props.ielts}+</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            Acceptance Rate: <b>{props.acc}%</b>
          </p>
          <p className="text-xl text-gray-800 mt-2">
            GPA: <b>{props.gpa}+</b>
          </p>
        </div>
      </div>
  );
}

export default Card;
