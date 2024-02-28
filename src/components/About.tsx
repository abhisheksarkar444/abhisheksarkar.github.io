import React from "react";
import { motion } from "framer-motion";
import Profile4 from "../../public/Images/Profile5.png";
import Image from "next/image";

type Props = {};

function About({}: Props) {
  return (
    <div
      className="h-screen flex flex-col relative text-center md:text-left 
                    md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProfile5.88f10b40.png&w=640&q=75"
        //src='./Profile4.jpeg'
        className="-mb-20 mt-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-96
          xl:w-[500px] xl:h-[600px]"
      />
      {/* <Image src={Profile4} alt='' width='200' height='300' /> */}
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm Abhishek. I am currently working as a Frontend Developer with
          React JS as the primary tech stack. I have also helped young
          professionals while contributing as an instructor to upskill their
          talents and to help them with their career. Skilled in ReactJS, Redux,
          .NET Framework, HTML-5, CSS-4, C#and Bootstrap. Strong engineering
          professional with a Bachelor of Engineering (BE) focused in
          Electronics and communication from Sri Venkareshwara college of
          engineering.
        </p>
      </div>
    </div>
  );
}

export default About;
