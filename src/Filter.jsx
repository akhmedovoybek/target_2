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
  const forceUpdate = useForceUpdate();
  let ieltsScore = useRef();
  let satScore = useRef();
  let gpaScore = useRef();
  const [selectedValue, setSelectedValue] = useState("");
  const info = props.data;
  const onInputChange = () => {
    ielts = ieltsScore.current.value;
    sat = satScore.current.value;
    gpa = gpaScore.current.value;
    forceUpdate();
  };
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
    const dreamCard = info.filter(
      (p) => p.name==selectedValue
    )

    const dreamCardFinal = dreamCard.map((p)=>(
      <Card
      key={p.name}
      name={p.name}
      img={p.img}
      sat={sat<p.sat ? <p className="text-red-800">{sat}❌ <span className="text-green-700">{p.sat}✅</span></p> : <p className="text-green-700"><span className="text-green-700">{sat}✅</span></p>}
      ielts={ielts<p.ielts ? <p className="text-red-800">{ielts}❌ <span className="text-green-700">{p.ielts}✅</span></p> : <p className="text-green-700"><span className="text-green-700">{ielts}✅</span></p>}
      acc={p.acc}
      tuition={p.tuition}
      gpa={gpa<p.gpa ? <p className="text-red-800">{gpa}❌ <span className="text-green-700">{p.gpa}✅</span></p> : <p className="text-green-700"><span className="text-green-700">{gpa}✅</span></p>}
      ranking={p.ranking}
      location={p.location}
      description={p.description}
    />
    ))
  return (
    <div>
      <div className="wrapper">
        <div className="banner h-56 w-full bg-no-repeat bg-cover flex flex-col items-center justify-center">
          <h2 className="text-slate-50 text-7xl font-bold">
            Aqlli Filtr
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
            <Search data={names} setSelectedValue={setSelectedValue} />
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
          <hr className="my-6" />
          <div className="flex gap-x-8">
          {dreamCardFinal}
          <div className="shadow-2xl bg-white rounded-xl w-auto card p-9">
            <h3 className="font-semibold text-4xl text-center mb-5">O'quv Markazlari</h3>
            <div className="flex gap-x-4 mb-14">
              <div className="flex flex-col">
                <h3 className="">Name: <b>SATashkent</b></h3>
                <p className="">SATashkent <br />91 787 65 75 <br /> https://g.co/kgs/18A33Ri</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price: 1.6 mln</p>
              </div>
              <div className="flex flex-col">
                <h3 className="">Name: <b>Sat by Ma'rifat Jama</b></h3>
                <p className="">SAT by Ma'rifat Jamal <br />78 113 39 99 <br /> https://g.co/kgs/hDi3Dmp</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price : 1.5 mln</p>
              </div>
              <div className="flex flex-col">
                <h3 className="">Name : <b>Prime Coach English School</b></h3>
                <p className="">Prime Coach English School <br />94 606 43 54 <br />https://www.instagram.com/primecoach.uz/</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price : 1.7 mln</p>
              </div>
            </div>
            <div className="flex gap-x-4">
              <div className="flex flex-col">
                <h3 className="">Name : <b>IELTS ZONE</b></h3>
                <p className="">IELTS ZONE LC - Integro A<br />55 511 09 09<br /> https://ieltszone.uz</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price: 850 000</p>
              </div>
              <div className="flex flex-col">
                <h3 className="">Name: <b>Diyorbek's IELTS</b></h3>
                <p className="">Diyorbek's IELTS LC <br />77 030 88 28 <br /> https://www.instagram.com/diyorbeksielts/</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price : 800 000</p>
              </div>
              <div className="flex flex-col">
                <h3 className="">Name : <b>IELTS IDP</b></h3>
                <p className="">IELTS IDP <br />71 230 01 03 <br />https://g.co/kgs/esb55vE</p>
                <p className="">Length: 3 oy</p>
                <p className="">Price : 900 000</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
