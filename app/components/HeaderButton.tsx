import React from "react";

const HeaderButton = ( {children, href}) => {
  return (
    <a className="px-5 py-2 hover:bg-slate-100 rounded-xl font-bold m-2 hover:m-1 hover:text-lg" href={href}>
      {children}
    </a>
  );
};

export default HeaderButton;
