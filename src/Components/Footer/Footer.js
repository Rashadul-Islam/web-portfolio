import Image from 'next/image';
import React from 'react';
import logo from "../../Images/logo.png";

const Footer = () => {
    return (
      <div className="mt-[100px]">
        <Image
          src={logo}
          alt="logo"
          height={70}
          width={"auto"}
          className="mx-auto xl:mb-[30px] mb-[40px]"
        />
        <p className="font-[poppins] text-[17px] leading-[27.2px] text-[#878E99] text-center xl:pb-[100px] pb-[40px]">
          © {new Date().getFullYear()}. All rights reserved by Rashadul Islam
        </p>
      </div>
    );
};

export default Footer;