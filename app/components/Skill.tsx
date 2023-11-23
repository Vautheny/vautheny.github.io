"use client";

import React, { useState } from "react";

const Skill = ({ skill }) => {
  const [bgColor, setBgColor] = useState('bg-slate-100')
  const changeBgColorHandler = (event) => {
    bgColor == 'bg-slate-100' && setBgColor('bg-blue-200');
    bgColor == 'bg-blue-200' && setBgColor('bg-slate-100');
  }
  return <div className={`${bgColor} flex p-2 m-2 rounded-xl`} onClick={changeBgColorHandler}>{skill}</div>;
};

export default Skill;
