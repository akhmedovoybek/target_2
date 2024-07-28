import React from "react";
import "./DarkTable.css";

const data = [
  {
    programName: "Pioneer academics",
    deadline: "December 17",
    eligibility: "High school students",
    programType: "Research program",
    university: "",
    format: "Online",
    link: "https://pioneeracademics.com/",
  },
  {
    programName: "Lumiere Education",
    deadline: "12th May",
    eligibility: "High school students",
    programType: "Research program",
    university: "Harvard",
    format: "Online",
    link: "https://www.lumiere-education.com/",
  },
  {
    programName: "(SPINWIP)",
    deadline: "May 1",
    eligibility: "Only female high school students",
    programType: "Study Program",
    university: "Stanford",
    format: "Online",
    link: "https://physics.stanford.edu/about/equity-and-inclusion/spinwip?utm_source=teenlife",
  },
  {
    programName: "Cornell summer school",
    deadline: "Depends on the program",
    eligibility: "age 16-20",
    programType: "Summer school",
    university: "Cornell",
    format: "Online & Offline",
    link: "https://physics.stanford.edu/about/equity-and-inclusion/spinwip?utm_source=teenlife",
  },
  {
    programName: "STEAMinAI",
    deadline: "Depends on the program",
    eligibility: "being at least in 9th grade",
    programType: "Study Program",
    university: "UC Berkeley",
    format: "Online",
    link: "https://steaminai.org/student-registration/",
  },
  {
    programName:"LaunchX",
    deadline:"Depends on the program", 
    eligibility: "High school students",
    programType: "Summer program",
    university: "MIT",
    format: "Online",
    link: "https://www.launchx.com/",
  },
  {
    programName:"Non-trivial",
    deadline:"August 25th", 
    eligibility: "Aged 14-20, haven't started university.",
    programType: "Fellowship program",
    university: "N/A",
    format: "Online",
    link: "https://www.non-trivial.org/apply?utm_campaign=may2023&utm_content=image&utm_medium=cpm&utm_source=facebook&fbclid=PAAaYlHkk1RXoptyipicnz5aHbxqVL58n0WdKsP7OjrHW3lfxx-58D_d6VFE4_aem_ASSUl2hLJdmXcwIbEKYRRX5nJhsypK0wDSHcvkFNhqkcuY51lISJU9C7OevXX-ZPNTuJGakfBGJSqgvZHryM0xmy1muZZsk79ahlY26_kAU_YIIOWxozOdQl_gzdzt_6TpU",
  },
  {
    programName:"Research Science Institute",
    deadline:"December 13th", 
    eligibility: "have to be in 10th grade.",
    programType: "Research program",
    university: "MIT",
    format: "Offline",
    link: "https://www.cee.org/programs/research-science-institute",
  },
  {
    programName:"FLEX",
    deadline:"20th September", 
    eligibility: "grades 9-12",
    programType: "Exchange program",
    university: "N/A",
    format: "Offline",
    link: "https://www.discoverflex.org/apply-to-flex",
  },
  {
    programName:"UWC",
    deadline:"November", 
    eligibility: "Aged 16-19, be in high school.",
    programType: "Exchange program",
    university: "N/A",
    format: "Offline",
    link: "https://www.uwc.org/page/?title=Admissions&pid=33",
  },
  {
    programName:"YYGS",
    deadline:"November 1th", 
    eligibility: "be high school student",
    programType: "Summer program",
    university: "Yale",
    format: "Offline",
    link: "https://globalscholars.yale.edu/how-to-apply",
  },
  {
    programName:"MathCamp",
    deadline:"March 6th", 
    eligibility: "Aged 13-18, high school student.",
    programType: "Summer program",
    university: "N/A",
    format: "Online",
    link: "https://grantlar.uz/canada-usa-mathcamp-for-13-18-year-olds/",
  },
  {
    programName:"UF SSTP",
    deadline:"May", 
    eligibility: "entering senior year and at least 16 years old by the program start date",
    programType: "Summer program",
    university: "University of Florida",
    format: "Offline",
    link: "https://ufcpet.smapply.us/",
  },
  {
    programName:"Immerse Education",
    deadline:"Depends on the program ", 
    eligibility: "ages 13-18",
    programType: "Provides any kind of programs",
    university: "University of Oxford",
    format: "Offline/Online",
    link: "https://www.immerse.education/select-programme/",
  },
  {
    programName:"Rise Challenge",
    deadline:"from June to January", 
    eligibility: "ages 15-17",
    programType: "Scholarship program",
    university: "N/A",
    format: "Online",
    link: "https://www.risefortheworld.org/apply-to-rise/",
  },
  {
    programName:"Veritas AI",
    deadline:"Depends on the program", 
    eligibility: "ages 15-18",
    programType: "Study program",
    university: "Harvard",
    format: "Online",
    link: "https://www.veritasai.com/compare-programs",
  },
  {
    programName:"TKS",
    deadline:"March 31th", 
    eligibility: "ages 13-18",
    programType: "Project incubator",
    university: "N/A",
    format: "Offline/Online",
    link: "https://www.tks.world/",
  },
  {
    programName:"Kode with Klossy",
    deadline:"31th March", 
    eligibility: "ages 13-18",
    programType: "Coding camp",
    university: "N/A",
    format: "Offline",
    link: "https://www.kodewithklossy.com/camp",
  },
  {
    programName:"YouLP",
    deadline:"22th March", 
    eligibility: "ages 18-25",
    programType: "Leadership program",
    university: "N/A",
    format: "Offline",
    link: "https://www.youlp.uz/",
  },
  {
    programName:"Leaders of tomorrow",
    deadline:"10th May", 
    eligibility: "ages 14-24",
    programType: "Virtual exchange program",
    university: "N/A",
    format: "Online",
    link: "https://go.lotep.org/lot2024",
  },
  {
    programName:"The school of New York Times",
    deadline:"8th April", 
    eligibility: "High school students",
    programType: "Any kind of programmes",
    university: "N/A",
    format: "Offline/Online",
    link: "https://nytedu.com/",
  },
  {
    programName:"International Youth Conference",
    deadline:"30th March", 
    eligibility: "ages 18-35",
    programType: "International Conference",
    university: "N/A",
    format: "Offline",
    link: "https://www.gybn.org/post/international-youth-conference-on-biodiversity-yokohama-2024",
  },
  {
    programName:"One Yound World Summit",
    deadline:"9th April", 
    eligibility: "ages 18-30",
    programType: "Global Summit",
    university: "N/A",
    format: "Offline",
    link: "https://www.oneyoungworld.com/scholarships/leading-asia-scholarship-2024",
  },
  {
    programName:"Upenn Engineering Camp",
    deadline:"2nd March", 
    eligibility: "be over 15 years, finished 9th grade + TOEFL",
    programType: "Summer school",
    university: "UPenn",
    format: "Offline",
    link: "https://esap.seas.upenn.edu/apply/international-students/",
  },
  {
    programName:"Oxford Royale Academy",
    deadline:"Depends on the program", 
    eligibility: "be high school student",
    programType: "Summer school",
    university: "Oxford",
    format: "Offline",
    link: "https://www.oxford-royale.com/",
  },
  {
    programName:"UC-Berkeley Pre-College Scholars",
    deadline:"Depends on the program", 
    eligibility: "be high school student",
    programType: "Summer school",
    university: "UC-Berkeley",
    format: "Offline",
    link: "https://precollege.berkeley.edu/residential",
  },
  {
    programName:"Cornell Summer College",
    deadline:"Depends on the program", 
    eligibility: "be high school student",
    programType: "Summer school",
    university: "Cornell",
    format: "Offline",
    link: "https://sce.cornell.edu/precollege/summer-college",
  },
  {
    programName:"Emory Pre-College Program",
    deadline:"May 17", 
    eligibility: "be high school student",
    programType: "Summer school",
    university: "Emory",
    format: "Offline/Online",
    link: "https://precollege.emory.edu/",
  },
  {
    programName:"NYU Pre-College Program",
    deadline:"March 15th", 
    eligibility: "be high school student",
    programType: "Summer school",
    university: "NYU",
    format: "Offline",
    link: "https://www.nyu.edu/admissions/high-school-and-middle-school-programs/high-school-programs/nyu-precollege-program.html",
  },
  {
    programName:"Standford Pre-College Program",
    deadline:"March 15th", 
    eligibility: "be over 16 + English certificate",
    programType: "Summer school",
    university: "Standford",
    format: "Offline",
    link: "https://summerinstitutes.spcs.stanford.edu/#programdates",
  },
  {
    programName:"Babson Summer Study",
    deadline:"March 15th", 
    eligibility: "be over 16 + English certificate",
    programType: "Summer school",
    university: "Babson",
    format: "Offline/Online",
    link: "https://www.babson.edu/high-school-programs/",
  },
  {
    programName:"Wake Forest Online Immersion Program",
    deadline:"Depends on the program", 
    eligibility: "be over 13 ",
    programType: "Summer school",
    university: "Wake Forest University",
    format: "Oline",
    link: "https://immersion.summer.wfu.ed/",
  },
];

const DarkTable = () => {
  return (
    <div className="">
      <div className="banner h-56 w-full bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <h2 className="text-slate-50 text-7xl font-bold">Dasturlar</h2>
      </div>
      <h3 className="text-center text-4xl text-gray-900 font-semibold mt-9">
            Xalqaro Dasturlar
          </h3>
      <div className="table-container">
        <table className="styled-table">
          <thead>
            <tr>
              <th>Program's name</th>
              <th>Deadline</th>
              <th>Eligibility</th>
              <th>Program type</th>
              <th>University</th>
              <th>Format</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.programName}</td>
                <td>{row.deadline}</td>
                <td>{row.eligibility}</td>
                <td>{row.programType}</td>
                <td>{row.university}</td>
                <td>{row.format}</td>
                <td>
                  <a href={row.link} target="_blank" className="hover:underline">link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DarkTable;
