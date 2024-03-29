import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-sm text-gray-500">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-8 ">
        <Skill directionLeft={true} proficiency="90%" imgSrc="/Images/ReactLogo.png" />
        <Skill directionLeft={true} proficiency="70%" imgSrc="/Images/JS_Logo.png" />
        <Skill directionLeft={true} proficiency="90%" imgSrc="/Images/CSS.png" />
        <Skill directionLeft={true} proficiency="60%" imgSrc="/Images/JQuery.png" />
        <Skill directionLeft={false} proficiency="40%" imgSrc="/Images/JQuery.png" />
        <Skill proficiency="" imgSrc="/Images/JQuery.png" />
        <Skill proficiency="" imgSrc="/Images/JQuery.png" />
        <Skill proficiency="" imgSrc="/Images/JQuery.png" />
      </div>
    </motion.div>
  );
}
