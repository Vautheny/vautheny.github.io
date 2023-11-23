import React from "react";
import defaultLogo from "@/public/images/logo192.png";
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex justify-center">
      <Image src={defaultLogo} alt="Twitter" className="w-10 m-1 hover:cursor-pointer hover:w-11 hover:m-0" />
      <Image src={defaultLogo} alt="Github" className="w-10 m-1 hover:cursor-pointer hover:w-11 hover:m-0" />
      <Image src={defaultLogo} alt="LinkedIn" className="w-10 m-1 hover:cursor-pointer hover:w-11 hover:m-0" />
    </div>
  );
};

export default Socials;
