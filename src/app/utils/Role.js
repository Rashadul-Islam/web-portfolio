import { SiJirasoftware } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { SiCodersrank } from "react-icons/si";
import { BsDatabaseCheck } from "react-icons/bs";

export const role = [
  {
    id: 1,
    icon: <SiJirasoftware className="text-[#FF014F] text-[50px]" />,
    title: "Software Engineer",
    description:
      "Designs, develops, tests, and maintains software applications to meet user needs. Skilled in multiple programming languages and work on both the technical and functional sides of systems.",
  },
  {
    id: 2,
    icon: <IoLogoReact className="text-[#FF014F] text-[50px]" />,
    title: "Frontend Developer",
    description:
      "Specializes in building the visual and interactive parts of websites and applications. Uses HTML, CSS, JavaScript, and frameworks like React or Vue to create user-friendly interfaces.",
  },
  {
    id: 3,
    icon: <FaNodeJs className="text-[#FF014F] text-[50px]" />,
    title: "Backend Developer",
    description:
      "Focuses on server-side development, building the logic, databases, and APIs that power applications. Works with technologies like Node.js, Epress.js and Nest.js",
  },
  {
    id: 4,
    title: "App Developer",
    icon: <TbBrandReactNative className="text-[#FF014F] text-[50px]" />,
    description:
      "Creates mobile applications for platforms such as iOS and Android. Uses React Native to deliver responsive and intuitive user experiences on mobile devices.",
  },
  {
    id: 5,
    title: "Problem Solver",
    icon: <SiCodersrank className="text-[#FF014F] text-[50px]" />,
    description:
      "Analytical thinker who identifies issues, designs efficient solutions, and improves systems or workflows. Often works across domains to ensure stability, performance, and scalability.",
  },
  {
    id: 6,
    title: "Database Designer",
    icon: <BsDatabaseCheck className="text-[#FF014F] text-[50px]" />,
    description:
      "Designs and structures databases to efficiently store, retrieve, and manage data. Ensures data integrity, normalization, and performance optimization.",
  },
];
