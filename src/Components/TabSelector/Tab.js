import React from "react";

const Tab = ({ selection, selectedTab, title, setSelectedTab }) => {
  return (
    <div
      onClick={() => setSelectedTab(selection)}
      className={`group relative xl:h-full md:h-full h-[70px] xl:w-1/3 md:w-1/3 w-full overflow-hidden cursor-pointer flex items-center justify-center ${
        selectedTab === selection
          ? "bg-[#F9004D]/50 text-[#C4CFDE] overflow-hidden"
          : "text-[#C4CFDE]"
      }`}
    >
      {/* animated background */}
      <span className="absolute inset-[1px] overflow-hidden">
        <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full bg-[#F9004D]/50 transition-all duration-700 group-hover:-translate-x-0 group-hover:scale-150"></span>
      </span>

      {/* content */}
      <p className="relative z-10 font-poppins text-[18px] transition-colors duration-300 group-hover:text-white">
        {title}
      </p>
    </div>
  );
};

export default Tab;
