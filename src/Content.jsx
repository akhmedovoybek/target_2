import React from "react";
import {Link} from "react-router-dom";
function Content() {
  return (
    <div className="wrapper px-72 py-14 bg-white">
      <h2 className="text-center text-7xl font-bold mb-8">Proyekt Haqida</h2>
      <div className="flex justify-between items-center">
        <img
          src="/img_4163.jpg"
          alt=""
          className="w-2/5 rounded-2xl shadow-lg"
        />
        <p className="w-6/12 text-3xl">
          Yurtimizning ko'plab yoshlari hozirgi kunda chet el universitetlariga
          juda katta qiziqish uyg'atmoqda. Ushbu sayt ko'plab dunyoning top
          universitetlari haqidagi ma'lumotlarni jamlash va filtrlashga va
          kelajak universitetingizni tanlashga yordam beradi.
        </p>
      </div>
      <h2 className="text-center text-7xl font-bold mb-8 mt-20">Xizmatlar</h2>
      <div className="flex flex-col gap-y-6">
        <figure className="flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 shadow-2xl">
            <img src="/Blair-Hall-campus-Princeton-University-NJ.png" alt="" className="h-64 rounded-l-xl" />
          <div className="pt-6 text-center px-8 md:text-left space-y-4">
            <h3 className="font-semibold text-gray-800 text-5xl">Xalqaro Universitetlar</h3>
            <p className="text-gray-800 text-3xl">Xalqaro universitetlar va ularning talablari haqida ma'lumotlar.</p>
            <Link to="/universities" className="p-7 bg-gray-900 hover:bg-gray-700 transition-all duration-300 text-2xl text-slate-100 rounded-xl block w-fit py-4">Ko'rish</Link>
          </div>
        </figure>
        <figure className="flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 shadow-2xl">
            <img src="/College-Map.jpeg" alt="" className="h-64 rounded-l-xl object-cover card-image" />
          <div className="pt-6 text-center px-8 md:text-left space-y-4">
            <h3 className="font-semibold text-gray-800 text-5xl">Aqlli Filtr</h3>
            <p className="text-gray-800 text-3xl">Aqlli Filtr sizga orzuingizdagi universitetni topishda ko'maklashadi.</p>
            <Link to="/filter" className="p-7 bg-gray-900 hover:bg-gray-700 transition-all duration-300 text-2xl text-slate-100 rounded-xl block w-fit py-4">Ko'rish</Link>
          </div>
        </figure>
        <figure className="flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 shadow-2xl">
            <img src="/programs.jpg" alt="" className="h-64 rounded-l-xl object-cover card-image" />
          <div className="pt-6 text-center px-8 md:text-left space-y-4">
            <h3 className="font-semibold text-gray-800 text-5xl">Dasturlar</h3>
            <p className="text-gray-800 text-3xl">Maktab va universitet o'quvchilari uchun turli-xil xalqaro dasturlar.</p>
            <Link to="/programs" className="p-7 bg-gray-900 hover:bg-gray-700 transition-all duration-300 text-2xl text-slate-100 rounded-xl block w-fit py-4">Ko'rish</Link>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Content;
