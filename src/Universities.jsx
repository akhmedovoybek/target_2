import React from "react";
import Card from "./Card";

function Universities(props) {
  let info = props.data;

  let cards = info.map((p) => {
    return <Card name={p.name} img = {p.img} sat={p.sat} ielts={p.ielts} acc={p.acc} tuition={p.tuition} gpa={p.gpa} ranking={p.ranking} location={p.location} />;
  });

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

          <div className="flex justify-center mt-7">
            <input type="text" className="" />
          </div>
          <div className="flex flex-wrap justify-between gap-y-7">
            {cards}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universities;
