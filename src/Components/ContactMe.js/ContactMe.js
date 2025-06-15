import Image from "next/image";
import React from "react";
import contactImage from "../../Images/contactImg.png";
import { FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi";
import Link from "next/link";
import ContactForm from "./ContactForm";

const ContactMe = () => {
  return (
    <div
      className="h-auto xl:w-[1320px] md:w-full w-[96%] mx-auto xl:px-0 lg:px-5 md:px-5 px-0 mt-[99px]"
      id="contact"
    >
      <p className="text-[#F9004D] text-[14px] tracking-[1px] text-center w-full">
        CONTACT
      </p>
      <h1 className="xl:text-[60px] text-[34px] font-bold mt-[15px] text-[#C4CFDE] leading-[72px] text-center">
        Contact Me
      </h1>
      <div className="mt-[50px] flex flex-wrap xl:gap-y-0 gap-y-10 justify-between items-center">
        <div className="xl:w-[526.25px] w-full xl:h-[753.91px] h-auto rounded-[10px] bg-[rgb(33,36,40)] drop-shadow-xl/50 p-[30px]">
          <Image
            src={contactImage}
            alt="Contact Image"
            width={500}
            height={600}
            className="w-full h-auto object-cover rounded-[10px] mb-[27px]"
          />
          <h1 className="leading-[44px] text-[29px] text-[#E4E6EA] font-bold font-[montserrat] mb-[10px]">
            Md Rashadul Islam
          </h1>
          <p className="text-[18px] font-[poppins] leading-[27px] text-[#878E99] mb-[18px]">
            Software Engineer
          </p>
          <p className="text-[18px] font-[poppins] leading-[30px] text-[#878E99] mb-[23px]">
            I am available for freelance work. Feel free to connect with me or
            reach out through my profile.
          </p>
          <div className="font-[poppins] texxt-[18px] leading-[27px] text-[#C4CFDE] mb-[40px]">
            <p>
              <span className="text-[#878E99]">Phone: </span> +61416934547
            </p>
            <p>
              <span className="text-[#878E99]">Email: </span>
              rashadulislam4581@gmail.com
            </p>
          </div>
          <div>
            <p className="font-poppins text-[#C4CFDE] text-[14px] leading-[21px] tracking-[2px]">
              FIND WITH ME
            </p>
            <div className="flex gap-[24px] mt-[20px]">
              <Link
                className="h-[60px] w-[60px] bg-[#1C1E22] drop-shadow-xl/50 rounded-xl flex items-center justify-center"
                href="https://web.facebook.com/rashadul5"
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
        <ContactForm />
      </div>
      <hr className="xl:w-[1320px] w-full mx-auto h-[1.5px] bg-[#121415] mt-[100px]" />
    </div>
  );
};

export default ContactMe;
