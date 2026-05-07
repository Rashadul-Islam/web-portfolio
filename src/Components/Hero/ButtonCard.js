import Link from "next/link";

const ButtonCard = ({ link, icon }) => {
  return (
    <Link
      href={link}
      target="_blank"
      className="group relative h-[60px] w-[60px] overflow-hidden rounded-xl p-[1px] drop-shadow-xl/50"
    >
      {/* animated border */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_20%,#1877F2,#60A5FA,#1877F2,transparent_80%)]" />
      </div>
      <div className="relative z-10 flex h-full w-full items-center justify-center rounded-xl bg-[#1C1E22] shadow-xl text-[24px] text-[#C4CFDE] transition-colors duration-300 group-hover:text-white">
        {icon}
      </div>
    </Link>
  );
};

export default ButtonCard;
