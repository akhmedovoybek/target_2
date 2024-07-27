import React, { useReducer, useRef, useState } from "react";
import Card from "./Card";
import Search from "./Search";
import "./Search.css";

// Force update hook
function useForceUpdate() {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}

let ielts = "";
let sat = "";
let gpa = "";
let dream = "";

let searchQuery = "";

function Filter(props) {
  let modal = React.createRef();
  const [opacity, setOpacity] = React.useState(0);
  let description = "";
  let name = "";
  const forceUpdate = useForceUpdate();
  let ieltsScore = useRef();
  let satScore = useRef();
  let gpaScore = useRef();
  let dreamUni = useRef();

  const onInputChange = () => {
    ielts = ieltsScore.current.value;
    sat = satScore.current.value;
    gpa = gpaScore.current.value;
    dream = dreamUni.current.value;
    forceUpdate();
  };
  const info = props.data;
  const names = info.map((p) => p.name);

  const filteredInfo = info.filter(
    (p) => p.ielts <= ielts && p.sat <= sat && p.gpa <= gpa
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
    />
  ));

  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(names);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const filtered = names.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleItemClick = (item) => {
    setQuery(item);
    setFilteredData([item]);
  };
  const dreamCard = info.filter((p) => p.name == dream);

  return (
    <div>
      <div className="wrapper">
        <div className="banner h-56 w-full bg-no-repeat bg-cover flex flex-col items-center justify-center">
          <h2 className="text-slate-50 text-7xl font-bold">
            Xalqaro Universitetlar
          </h2>
        </div>
        <div className="py-12 px-44">
          <h3 className="text-center text-4xl text-gray-900 font-semibold mt-9">
            Universitetingizni toping
          </h3>

          <div className="flex justify-between mt-7 mb-11">
            <div className="relative">
              <div className="rounded-2xl shadow-2xl bg-slate-300 p-8 flex flex-col justify-center items-center gap-y-2">
                <h3 className="text-slate-900 font-semibold text-3xl">IELTS</h3>
                <div className="relative">
                  <input
                    ref={ieltsScore}
                    type="text"
                    className="w-32 pl-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ballingiz"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl bg-slate-300 p-8 flex flex-col justify-center items-center gap-y-2">
                <h3 className="text-slate-900 font-semibold text-3xl">SAT</h3>
                <div className="relative">
                  <input
                    ref={satScore}
                    type="text"
                    className="w-32 pl-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ballingiz"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl bg-slate-300 p-8 flex flex-col justify-center items-center gap-y-2">
                <h3 className="text-slate-900 font-semibold text-3xl">GPA</h3>
                <div className="relative">
                  <input
                    ref={gpaScore}
                    type="text"
                    className="w-32 pl-10 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ballingiz"
                  />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl bg-slate-300 p-8 flex flex-col justify-center items-center gap-y-2">
                <h3 className="text-slate-900 font-semibold text-3xl">
                  Dream Uni
                </h3>
                <div>
                  <div className="relative">
                    <input
                      ref={dreamUni}
                      value={query}
                      type="text"
                      className="w-96 pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Search..."
                      onChange={handleSearch}
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
                  <ul className="scrollable-list">
                    {filteredData.map((item, index) => (
                      <li key={index} onClick={() => handleItemClick(item)}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mb-8">
            <button
              onClick={onInputChange}
              className="p-5 bg-slate-900 text-slate-100 font-medium rounded-xl text-2xl px-12 hover:bg-slate-700 duration-300"
            >
              Filter
            </button>
          </div>
          <div className="flex flex-wrap justify-between gap-y-7">{cards}</div>
          <hr className="" />
          <Card
            key={dreamCard.name}
            name={dreamCard.name}
            img={dreamCard.img}
            sat={dreamCard.sat}
            ielts={dreamCard.ielts}
            acc={dreamCard.acc}
            tuition={dreamCard.tuition}
            gpa={dreamCard.gpa}
            ranking={dreamCard.ranking}
            location={dreamCard.location}
            description={dreamCard.description}
          />
        </div>
      </div>
    </div>
  );
}

export default Filter;
