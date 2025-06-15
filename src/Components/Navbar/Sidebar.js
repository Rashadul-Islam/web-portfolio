import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ sidebarOpen, setSidebarOpen, logo }) => {
  const excludedRef = useRef(null);

  const handleParentClick = (e) => {
    if (!excludedRef.current || !excludedRef.current.contains(e.target)) {
      setSidebarOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {sidebarOpen ? (
        <div
          onClick={(e) => handleParentClick(e)}
          className="w-screen h-screen bg-[rgba(0,0,0,0.8)] absolute top-0 left-0 transition duration-150 ease-in-out"
        >
          <div
            ref={excludedRef}
            className="md:w-[393px] w-[310px] h-screen bg-[#191b1e] drop-shadow-xl/50 px-[20px] md:px-[50px]"
          >
            <div className="md:w-[295px] w-[270px] h-[70px] pt-[30px] flex justify-between items-center">
              <Image src={logo} alt="logo" height={70} width={"auto"} />
              <div
                className="text-[#FF014F] text-[25px] h-[45px] w-[45px] rounded-full shadow-xl/30 cursor-pointer flex items-center justify-center"
                onClick={() => {
                  setSidebarOpen(!sidebarOpen);
                  document.body.style.overflow = "auto";
                }}
              >
                <RxCross2 />
              </div>
            </div>
            <div className="w-[254px] h-[96px] mt-[20px]">
              <p className="text-[#878E99] text-[16px] font-[montserrat]">
                Software Engineer building efficient, scalable, and
                user-friendly web applications.
              </p>
            </div>
            <div className="h-auto w-full border-t-[1px] border-b-[1px] border-[#FF014F] flex flex-col gap-5 py-[20px]">
              <Link
                className="hover:text-[#FF014F] text-[#C4CFDE]"
                href="#home"
                onClick={() => setSidebarOpen(false)}
              >
                Home
              </Link>
              <Link
                className="hover:text-[#FF014F] text-[#C4CFDE]"
                href="#features"
                onClick={() => setSidebarOpen(false)}
              >
                Features
              </Link>
              <Link
                className="hover:text-[#FF014F] text-[#C4CFDE]"
                href="#resume"
                onClick={() => setSidebarOpen(false)}
              >
                Resume
              </Link>
              <Link
                className="hover:text-[#FF014F] text-[#C4CFDE]"
                href="https://github.com/Rashadul-Islam"
              >
                GitHub
              </Link>
              <Link
                className="hover:text-[#FF014F] text-[#C4CFDE]"
                href="#contact"
                onClick={() => setSidebarOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div>
              <p className="font-poppins text-[#C4CFDE] text-[14px] leading-[21px] tracking-[2px] mt-[30px]">
                FIND WITH ME
              </p>
              <div className="flex gap-[24px] mt-[20px]">
                <Link
                  className="h-[60px] w-[60px] bg-[#1C1E22] drop-shadow-xl/50 rounded-xl flex items-center justify-center"
                  href="https://facebook.com/rashadul5"
                  target="_blank"
                >
                  <FiFacebook className="text-[#C4CFDE] text-[24px]" />
                </Link>
                <Link
                  className="h-[60px] w-[60px] bg-[#1C1E22] drop-shadow-xl/50 rounded-xl flex items-center justify-center"
                  href="https://www.instagram.com/rashadul4581/"
                  target="_blank"
                >
                  <FiInstagram className="text-[#C4CFDE] text-[24px]" />
                </Link>
                <Link
                  className="h-[60px] w-[60px] bg-[#1C1E22] drop-shadow-xl/50 rounded-xl flex items-center justify-center"
                  href="https://www.linkedin.com/in/rashadul-islam-398155211/"
                  target="_blank"
                >
                  <FiLinkedin className="text-[#C4CFDE] text-[24px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
