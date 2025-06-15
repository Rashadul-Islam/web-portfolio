"use client";

import Image from "next/image";
import logo from "../../Images/logo.png";
import Link from "next/link";

import { FaBars } from "react-icons/fa6";

import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="fixed top-0 w-screen z-10" id="home">
      <div className="relative">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          logo={logo}
        />
        <div className="w-auto h-[122px] bg-[#212428] flex justify-between items-center xl:px-[79px] md:px-[79px] px-[15px]">
          <Link className="w-[139px] h-[70px]" href="#home">
            <Image src={logo} alt="logo" height={70} width={"auto"} priority />
          </Link>
          <div className="flex items-center gap-6 font-[montserrat] text-[13px] height-[19.5px] text-[#C4CFDE]">
            <Link className="hover:text-[#FF014F] hidden xl:block" href="#home">
              Home
            </Link>
            <Link
              className="hover:text-[#FF014F] hidden xl:block"
              href="#features"
            >
              features
            </Link>
            <Link
              className="hover:text-[#FF014F] hidden xl:block"
              href="#resume"
            >
              Resume
            </Link>
            <Link
              className="hover:text-[#FF014F] hidden xl:block"
              href="https://github.com/Rashadul-Islam"
              target="_blank"
              noreferrer="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="hover:text-[#FF014F] hidden xl:block"
              href="#contact"
            >
              Contact
            </Link>
            <div
              className="text-[#FF014F] text-[25px] cursor-pointer xl:hidden block"
              onClick={() => {
                setSidebarOpen(!sidebarOpen);
                document.body.style.overflow = "hidden";
              }}
            >
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
