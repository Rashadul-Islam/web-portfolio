import React from "react";

const RoleMapper = ({ icon, title, description }) => {
  return (
    <div className="group relative xl:w-[401.66px] md:w-[48%] w-full xl:h-[344px] md:h-[339.79px] h-[295.79px] overflow-hidden rounded-[10px] bg-gradient-to-br from-[#212428] to-[#16181c] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(59,130,246,0.25)] cursor-pointer drop-shadow-xl/50">
      {/* animated hover border */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-[-100%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,#06b6d4,#3b82f6,#8b5cf6,transparent_80%)]" />
      </div>

      {/* card content */}
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-[10px] bg-gradient-to-br from-[#212428] to-[#16181c]">
        <div className="xl:w-[313.33px] md:w-[85%] w-[352px] xl:h-[279.79px] md:h-auto h-[227.79px] transition-all duration-500 group-hover:scale-105">
          <div className="transition-all duration-500 group-hover:text-cyan-400">
            {icon}
          </div>

          <h2 className="text-[24px] xl:mt-[28px] md:mt-[28px] mt-[10px] text-[#C4CFDE] font-medium leading-[32px] font-poppins transition-colors duration-500 group-hover:text-white">
            {title}
          </h2>

          <p className="text-[#C4CFDE] text-[14px] leading-[28px] xl:mt-[20px] md:mt-[20px] mt-[15px] font-poppins transition-colors duration-500 group-hover:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleMapper;
