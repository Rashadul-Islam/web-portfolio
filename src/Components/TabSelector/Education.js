import React from "react";

const Education = ({ education }) => {
  return (
    <div className="py-10 xl:w-[1320px] w-full mx-auto  font-[poppins]">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 h-full border-r-4 border-black"></div>

        <ul className="list-none m-0 p-0 space-y-10">
          {education.map((item) => (
            <li key={item.id} className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="relative">
                <div className="bg-gray-800 group-hover:bg-red-700 border-4 border-black rounded-full h-5 w-5 absolute -left-2 top-14 shadow-4xl"></div>
                <div className="absolute top-16 left-2 h-1 w-6 bg-black"></div>
              </div>

              {/* Timeline content */}
              <div className="ml-8 flex-1 text-[#7C838E] hover:text-[#C4CFDE] bg-gradient-to-br from-[#212428] to-[#16181c] rounded-[10px] hover:bg-[linear-gradient(145deg,_rgb(30,32,36),_rgb(35,39,43))] drop-shadow-xl/50">
                <div className="order-1 space-y-2 rounded-lg shadow transition duration-300 ease-in-out w-full xl:p-[40px] p-[25px]">
                  <div className="flex xl:flex-row flex-col items-center justify-between">
                    <div className="self-start">
                      <h3 className="text-[24px] font-medium text-[#C4CFDE]">
                        {item.title}
                      </h3>
                      <p className="text-[14px] mb-1">{item.institution}</p>
                      <p className="text-sm pb-4">
                        {item.location + " | " + item.duration}
                      </p>
                    </div>
                    <p className="xl:self-center self-start xl:mb-0 mb-2 text-[14px] text-[#FF014F] bg-[linear-gradient(145deg,_rgb(30,32,36),_rgb(35,39,43))] drop-shadow-xl/50 rounded-[5px] px-3 py-2">
                      {item.gpa}
                    </p>
                  </div>
                  <hr className="border-[#121415] mb-[20px]" />
                  <p className="text-sm font-medium leading-snug tracking-wide">
                    {item.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Education;
