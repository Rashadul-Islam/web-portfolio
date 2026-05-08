import Image from "next/image";
import myPhoto from "../../Images/myImg.png";

import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { RiNextjsLine } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

import Link from "next/link";
import TypeWritter from "./TypeWritter";
import ButtonCard from "./ButtonCard";
import { AiFillGithub } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="h-auto xl:w-[1320px] w-full mx-auto xl:px-0 px-5">
      <div className="h-auto xl:w-[1320px] w-full flex justify-between xl:flex-row flex-col-reverse xl:mt-[101.34px] md:pt-[120px] pt-[130px]">
        <div className="xl:w-[736.25px] w-full h-auto">
          <p className="text-[14px] text-[#C4CFDE] tracking-[3px] font-montserrat xl:mt-0 mt-[50px]">
            Welcome To My World
          </p>
          <h1 className="font-[montsterrat] xl:text-[60px] md:text-[60px] text-[40px] leading-[72px] text-[#FFFFFF] mt-[16px]">
            Hi, I’m <span className="text-[#FF014F]">Rashadul</span>
          </h1>
          <TypeWritter />
          <p className="font-poppins text-[16px] leading-[24px] text-[#C4CFDE] mt-[16px] xl:w-[612.42px] md:w-[612.42px] w-[96%]">
            Skilled Software Engineer with expertise in JavaScript, Node, and
            React. Passionate about building efficient applications, solving
            problems, and collaborating in agile teams to deliver high-quality,
            user-focused solutions.
          </p>
          <div className="xl:mt-[151px] mt-[30px] xl:w-[612.42px] md:w-[612.42px] w-[96%] flex md:flex-row xl:flex-row flex-col justify-between">
            <div>
              <p className="font-poppins text-[#C4CFDE] text-[14px] leading-[21px] tracking-[2px]">
                FIND WITH ME
              </p>
              <div className="flex gap-[24px] mt-[20px]">
                <ButtonCard
                  link="https://facebook.com/rashadul5"
                  icon={<FiFacebook />}
                />
                <ButtonCard
                  link="https://github.com/Rashadul-Islam"
                  icon={<AiFillGithub />}
                />
                <ButtonCard
                  link="https://www.linkedin.com/in/rashadul-islam-398155211/"
                  icon={<FiLinkedin />}
                />
              </div>
            </div>
            <div className="xl:mt-0 md:mt-0 mt-[30px]">
              <p className="font-poppins text-[#C4CFDE] text-[14px] leading-[21px] tracking-[2px]">
                BEST SKILL ON
              </p>
              <div className="flex gap-[24px] mt-[20px]">
                <ButtonCard
                  link="https://react.dev/"
                  icon={<RiNextjsLine className="text-[#C4CFDE] text-[24px]" />}
                />
                <ButtonCard
                  link="https://nodejs.org/en"
                  icon={<FaNode className="text-[#C4CFDE] text-[24px]" />}
                />
                <ButtonCard
                  link="https://www.mongodb.com"
                  icon={<SiMongodb className="text-[#C4CFDE] text-[24px]" />}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-[500px] md:w-[500px] w-[96%] xl:h-[513px] md:h-[553px] h-[350px] mx-auto xl:mx-0 bg-[#1C1E22] drop-shadow-xl/50 rounded-[5px]">
          <Image
            src={myPhoto}
            alt="My Photo"
            height={600}
            width={513}
            priority
          />
        </div>
      </div>
      <hr className="xl:w-[1320px] w-full mx-auto h-[1.5px] bg-[#121415] mt-[100px]" />
    </div>
  );
};

export default Hero;
