import React from "react";

const HeaderButton = ( {children, href}) => {
  return (
    <a className="p-5 hover:bg-slate-200 rounded-xl font-bold m-1" href={href}>
      {children}
    </a>
  );
};

export default HeaderButton;
