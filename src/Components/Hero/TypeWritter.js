"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = () => {
  return (
    <h2 className="font-[montserrat] xl:text-[48px] md:text-[48px] text-[30px] leading-[48px] text-[#FFFFFF] mt-[16px]">
      <Typewriter
        words={[
          "Frontend Developer",
          "Backend Developer",
          "Software Engineer",
          "Problem Solver",
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h2>
  );
};

export default TypeWritter;
