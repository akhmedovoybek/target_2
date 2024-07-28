import React from "react";
import { Link } from "react-router-dom";
import description from "./description";

function Card(props) {
  const handleClick = ()=>{
    description.name = props.name;
    description.acc = props.acc;
    description.ranking = props.ranking;
    description.description = props.description;
    description.img = props.img;
    description.tuition = props.tuition;
    description.sat = props.sat;
    description.ielts = props.ielts;
    description.location = props.location;
    description.gpa = props.gpa;

  }

  return (
    <div className="shadow-2xl bg-white rounded-xl max-w-80 w-80 card">
      <div className="p-7">
        <div className="flex mt-3 gap-x-3 items-center">
          <img src={props.img} alt="" className="h-20" />
          <h3 className="text-2xl text-gray-800 mt-5 font-semibold">
            {props.name}
          </h3>
        </div>
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
        <p className="text-xl text-gray-800 mt-2 mb-7">
          GPA: <b>{props.gpa}+</b>
        </p>
        <Link
          className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 transition duration-300"
          to="/details"
          onClick={handleClick}
        >
          Ko'proq
        </Link>
      </div>
    </div>
  );
}

export default Card;
