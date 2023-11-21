import React from "react";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <div className="flex justify-center">
      <HeaderButton href='#about-me'>About Me</HeaderButton>
      <HeaderButton href='#projects'>Projects</HeaderButton>
    </div>
  );
};

export default Header;
