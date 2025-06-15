import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { skillSet } from "@/app/utils/Skillset";

const Skills = () => {
  return (
    <div className="xl:w-[1320px] md:w-full w-[96%] font-[montserrat] flex flex-wrap justify-between gap-y-[30px]">
      {skillSet.map((skill) => (
        <div key={skill.id} className="xl:w-[620px] md:w-[48%] w-full">
          <h3 className="mb-[15px] text-[#c3cedd] text-[12px] uppercase tracking-[2px] opacity-90 font-normal">
            {skill.name}
          </h3>
          <ProgressBar
            completed={skill.percentage}
            bgColor="#a7ffeb" // lighter green-teal
            baseBgColor="#374151" // lighter dark background
            height="7px"
            labelClassName="hidden" // hide the default label
            className="drop-shadow-xl/50"
            animateOnRender={true}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
