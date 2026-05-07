"use client";
import React, { useState } from "react";
import Tab from "./Tab";
import Education from "./Education";
import { education } from "@/app/utils/Education";
import { tabName } from "@/app/utils/TabMenu";
import Experiences from "./Experiences";
import { experience } from "@/app/utils/Experience";
import Skills from "./Skills";

const Tabmain = () => {
  const [selectedTab, setSelectedTab] = useState("experience");

  return (
    <div
      className="xl:w-[1320px] w-[96%] mx-auto mt-[99px] font-[montserrat]"
      id="resume"
    >
      <p className="text-center text-[14px] text-[#F9004D] traking-[1px]">
        3+ YEARS OF EXPERIENCE
      </p>
      <h1 className="text-center xl:text-[60px] text-[34px] font-bold mt-[15px] text-[#C4CFDE] leading-[72px]">
        My Resume
      </h1>
      <div className="relative my-[45px] xl:h-[86px] md:h-[86px] h-auto xl:w-[1320px] w-full overflow-hidden bg-[linear-gradient(145deg,_rgb(30,32,36),_rgb(35,39,43))]">
        {/* top animated line */}
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* right animated line */}
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-400 to-transparent animate-pulse" />

        {/* bottom animated line */}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse" />

        {/* left animated line */}
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />

        <div className="relative z-10 flex xl:h-[86px] md:h-[86px] h-auto xl:flex-row md:flex-row flex-col justify-between items-center">
          {tabName.map((tab, index) => (
            <Tab
              key={index}
              selection={tab.selection}
              selectedTab={selectedTab}
              title={tab.title}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </div>
      </div>
      {selectedTab === "experience" ? (
        <div className="flex xl:flex-row md:flex-row flex-col justify-between xl:gap-x-[40px] md:gap-x-8 gap-x-0">
          <Experiences experience={experience.left} />
          <Experiences experience={experience.right} />
        </div>
      ) : (
        ""
      )}
      {selectedTab === "education" ? (
        <div className="flex xl:flex-row md:flex-row flex-col justify-between xl:gap-x-[40px] md:gap-x-8 gap-x-0">
          <Education education={education.left} />
          <Education education={education.right} />
        </div>
      ) : (
        ""
      )}
      {selectedTab === "skills" ? (
        <div className="flex xl:flex-row md:flex-row flex-col justify-between xl:gap-x-[40px] md:gap-x-8 gap-x-0">
          <Skills />
        </div>
      ) : (
        ""
      )}
      <hr className="xl:w-[1320px] w-full mx-auto h-[1.5px] bg-[#121415] mt-[50px]" />
    </div>
  );
};

export default Tabmain;
