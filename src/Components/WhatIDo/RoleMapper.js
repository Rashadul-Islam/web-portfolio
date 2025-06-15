import React from "react";

const RoleMapper = ({ icon, title, description }) => {
  return (
    <div className="xl:w-[401.66px] md:w-[48%] w-full xl:h-[344px] md:h-[339.79px] h-[295.79px] flex items-center justify-center bg-gradient-to-br from-[#212428] to-[#16181c] rounded-[10px] drop-shadow-xl/50 cursor-pointer">
      <div className="xl:w-[313.33px] md:w-[85%] w-[352px] xl:h-[279.79px] md:h-auto h-[227.79px] transition-all duration-300 hover:scale-110">
        <>{icon}</>
        <h2 className="text-[24px] xl:mt-[28px] md:mt-[28px] mt-[10px] text-[#C4CFDE] font-medium leading-[32px] font-poppins">
          {title}
        </h2>
        <p className="text-[#C4CFDE] text-[14px] leading-[28px] xl:mt-[20px] md:mt-[20px] mt-[15px] font-poppins">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RoleMapper;
