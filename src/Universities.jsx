import React, { useReducer, useRef, useState } from "react";
import Card from "./Card";

// Force update hook
function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}

let searchQuery = "";

function Universities(props) {
  let modal = React.createRef();
  const [opacity, setOpacity] = React.useState(0);
  let description = '';
  let name = '';
  const showDescription = (description, name) => {
    setOpacity((prevOpacity) => (prevOpacity === 0 ? 1 : 0));
    this.description = description;
    this.name=name;
    console.log(description, name);
  };
  const forceUpdate = useForceUpdate();
  const inputValue = useRef();

  const onInputChange = () => {
    searchQuery = inputValue.current.value;
    forceUpdate();
  };

  const info = props.data;
  const filteredInfo = info.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cards = filteredInfo.map((p) => (
    <Card
      key={p.name}
      name={p.name}
      img={p.img}
      sat={p.sat}
      ielts={p.ielts}
      acc={p.acc}
      tuition={p.tuition}
      gpa={p.gpa}
      ranking={p.ranking}
      location={p.location}
      description={p.description}
      showDescription={showDescription}
    />
  ));

  return (
    <div>
      <div className="wrapper">
        <div className="banner h-56 w-full bg-no-repeat bg-cover flex flex-col items-center justify-center">
          <h2 className="text-slate-50 text-7xl font-bold">
            Xalqaro Universitetlar
          </h2>
        </div>
        <div className="py-12 px-60">
          <h3 className="text-center text-4xl text-gray-900 font-semibold mt-9">
            Universitetingizni toping
          </h3>

          <div className="flex justify-center mt-7 mb-11">
            <div className="relative">
              <input
                ref={inputValue}
                type="text"
                className="w-96 pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search..."
                onChange={onInputChange}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0 1 14 0z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-y-7">{cards}</div>
          <div
            className="z-10 w-3/4 h-60 bg-slate-800 text-slate-200 absolute my-0 mx-auto"
            style={{ opacity: opacity }}
            ref={modal}
          >
            <h3 className="font-semibold text-3xl">{name}</h3>
            <p className="text-2xl">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universities;
