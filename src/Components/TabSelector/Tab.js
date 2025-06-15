import React from "react";

const Tab = ({ selection, selectedTab, title, setSelectedTab }) => {
  return (
    <div
      onClick={() => setSelectedTab(selection)}
      className={`xl:h-full md:h-full h-[70px] xl:w-1/3 md:1/3 w-full flex items-center justify-center rounded-[10px] cursor-pointer text-[#C4CFDE] hover:shadow-xl/50 hover:text-[#F9004D] ${
        selectedTab === selection ? "shadow-xl/50 text-[#F9004D]" : ""
      }`}
    >
      <p className="font-poppins text-[18px]">{title}</p>
    </div>
  );
};

export default Tab;
