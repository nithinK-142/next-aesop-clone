import React from "react";
import { icons } from "../data/icons";

type ButtonProps = {
  text: string;
  hero?: boolean;
};

const Button: React.FC<ButtonProps> = ({ text, hero = false }) => {
  return (
    <div
      // "border-white hover:bg-white hover:text-black"
      className={`border border-solid mt-[30px] p-4 w-[60%] transition-colors duration-300 ease-out group ${hero ? "border-white hover:bg-white hover:text-black" : "hover:bg-[#333] hover:text-[#fffef2] hover:border-[#333] border-[rgba(51,51,51,0.2)]"} `}
    >
      <a href="#" className="flex items-center justify-between ">
        <span className="text-sm font-semibold">{text}</span>
        <div
          className={`${hero ? "fill-white group-hover:fill-black" : "fill-black group-hover:fill-[#fffef2]"}`}>
          {icons[0].rightArrow}
        </div>
      </a>
    </div>
  );
};

export default Button;
