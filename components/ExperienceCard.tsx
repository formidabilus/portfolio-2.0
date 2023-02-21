import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  console.log(experience.technologies);
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(experience?.companyImage).url()}
        alt="job image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Job title</h4>
        <p className="font-bold text-2xl mt-1">company</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <div key={technology?._id} className="h-10 w-10 relative">
              <Image
                className="rounded-full"
                objectFit="cover"
                layout="fill"
                src={urlFor(technology?.image).url()}
                alt="tech image"
              />
            </div>
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <div className="overflow-hidden overflow-y-scroll h-3/5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ul className=" list-disc space-y-4 ml-5 text-lg ">
            {experience?.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
