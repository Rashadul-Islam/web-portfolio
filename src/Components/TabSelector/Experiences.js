import React from "react";

const Experiences = ({ experience }) => {
  return (
    <div className="py-10 xl:w-[1320px] w-full mx-auto  font-[poppins]">
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 top-0 h-full border-r-4 border-black"></div>

        <ul className="list-none m-0 p-0 space-y-10">
          {experience.map((item) => (
            <li key={item.id} className="relative flex items-start group">
              {/* Timeline marker */}
              <div className="relative">
                <div className="bg-gray-800 group-hover:bg-red-700 border-4 border-black rounded-full h-5 w-5 absolute -left-2 top-14 shadow-4xl"></div>
                <div className="absolute top-16 left-2 h-1 w-6 bg-black"></div>
              </div>

              {/* Timeline content */}
              <div className="group relative ml-8 flex-1 overflow-hidden rounded-[10px] p-[1px]">
                {/* animated border */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-[-100%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,#FF014F,#ff4d88,#FF014F,transparent_80%)]" />
                </div>

                {/* original content */}
                <div className="relative z-10 text-[#7C838E] hover:text-[#C4CFDE] bg-gradient-to-br from-[#212428] to-[#16181c] rounded-[10px] hover:bg-[linear-gradient(145deg,_rgb(30,32,36),_rgb(35,39,43))] drop-shadow-xl/50">
                  <div className="order-1 space-y-2 rounded-lg shadow transition duration-300 ease-in-out w-full xl:p-[40px] p-[25px]">
                    <div className="flex xl:flex-row flex-col items-center justify-between">
                      <div className="self-start">
                        <h3 className="text-[24px] font-medium text-[#C4CFDE]">
                          {item.title}
                        </h3>

                        <p className="text-[14px] mb-4">
                          {item.company + " | " + item.duration}
                        </p>
                      </div>

                      <p className="xl:self-center self-start xl:mb-0 mb-2 text-[14px] text-[#FF014F] bg-[linear-gradient(145deg,_rgb(30,32,36),_rgb(35,39,43))] drop-shadow-xl/50 rounded-[5px] px-3 py-2">
                        {item.location}
                      </p>
                    </div>

                    <hr className="border-[#121415] mb-[20px]" />

                    <div className="text-sm font-medium leading-snug tracking-wide">
                      {item.responsibilities.map((desc, index) => (
                        <div className="flex mb-2" key={index}>
                          <p className="pr-1">{index + 1}.</p>
                          <p>{desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experiences;
