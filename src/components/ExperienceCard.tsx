import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] 
      snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://photos.fliarbi.com/5dfddd71cd43c-logo.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Software Engineer</h4>
        <p className="font-bold text-2xl mt-1">PRATIAN TECHNOLOGIES</p>
        <div className="flex space-x-2 my-2">
          <Image
            src="/Images/JS_Logo2.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-20 h-10 rounded-full"
          />
          <Image
            src="/Images/JS_Logo3.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-10 h-10 rounded-full"
          />
          <Image
            src="/Images/CSS_Logo.png"
            width={100}
            height={100}
            alt="Picture of the author"
            className="w-10 h-10 rounded-full"
          />
          {/* techs */}
        </div>

        <p className="uppercase py-5 text-gray-300">
          Started working - ... ended
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            points
          </li>
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}
