import React from "react";

const HeaderButton = ( {children, href}) => {
  return (
    <a className="p-5 hover:bg-slate-300 rounded-l" href={href}>
      {children}
    </a>
  );
};

export default HeaderButton;
