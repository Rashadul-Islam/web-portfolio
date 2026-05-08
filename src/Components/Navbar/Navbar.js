"use client";

import Image from "next/image";
import logo from "../../Images/logo.png";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "features", label: "Features", href: "#features" },
    { id: "resume", label: "Resume", href: "#resume" },
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/Rashadul-Islam",
      external: true,
    },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 w-screen z-20" id="home">
      <div className="relative">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          logo={logo}
        />

        <div className="w-auto h-[122px] bg-[#212428] flex justify-between items-center xl:px-[79px] md:px-[79px] px-[15px]">
          <Link
            className="inline-block"
            href="#home"
            onClick={() => setActive("home")}
          >
            <Image
              src={logo}
              alt="logo"
              width={139}
              height={70}
              priority
              style={{
                width: "139px",
                height: "auto",
              }}
            />
          </Link>

          <div className="flex items-center gap-6 font-[montserrat] text-[13px] height-[19.5px] text-[#C4CFDE]">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                onClick={() => setActive(item.id)}
                className={`group relative hidden xl:block transition-colors duration-300 ${
                  active === item.id
                    ? "text-[#FF014F]"
                    : "text-[#C4CFDE] hover:text-[#FF014F]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-[#FF014F] transition-all duration-300 ${
                    active === item.id ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

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
