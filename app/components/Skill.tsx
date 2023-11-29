"use client";

import React, { useState } from "react";

const Skill = ({ skill, changeFilter }) => {
  const [bgColor, setBgColor] = useState('bg-slate-100')
  const onSkillClick = (event) => {
    changeBgColorHandler();
    changeFilter(event.target.attributes.skillName.value)
  }
  const changeBgColorHandler = () => {
    bgColor == 'bg-slate-100' && setBgColor('bg-blue-200');
    bgColor == 'bg-blue-200' && setBgColor('bg-slate-100');
  }
  return <div className={`${bgColor} flex p-2 m-2 rounded-xl`} onClick={onSkillClick} skillname={skill}>{skill}</div>;
};

export default Skill;
