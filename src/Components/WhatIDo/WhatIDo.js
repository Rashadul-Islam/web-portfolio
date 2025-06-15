import { role } from "@/app/utils/Role";
import React from "react";
import RoleMapper from "./RoleMapper";

const WhatIDo = () => {
  return (
    <div className="xl:w-[1320px] md:w-full w-[96%] xl:px-0 md:px-5 h-auto mx-auto mt-[99px] font-[montserrat]" id="features">
      <p className="text-[#F9004D] text-[14px] traking-[1px]">FEATURES</p>
      <h1 className="xl:text-[60px] text-[34px] font-bold mt-[15px] text-[#C4CFDE] leading-[72px]">
        What I Do
      </h1>
      <div className="flex justify-between h-auto items-center flex-wrap xl:gap-[50px] md:gap-y-8 gap-y-5 mt-[50px]">
        {role.map((item) => (
          <RoleMapper
            icon={item.icon}
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
      <hr className="xl:w-[1320px] w-full mx-auto h-[1.5px] bg-[#121415] mt-[100px]" />
    </div>
  );
};

export default WhatIDo;
