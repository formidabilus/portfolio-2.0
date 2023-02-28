import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  const dateStarted = new Date(experience?.dateStarted).toLocaleDateString(
    "en-us",
    { year: "numeric", month: "short" }
  );
  const dateEnded = new Date(experience?.dateEnded).toLocaleDateString(
    "en-us",
    { year: "numeric", month: "short" }
  );
  return (
    <article className="flex flex-col items-center sm:justify-start justify-around rounded-lg  space-y-7 flex-shrink-0 w-screen sm:w-[500px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 sm:opacity-40 sm:hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        className="w-32 h-32 rounded-full md:rounded-full xl:w-36  xl:h-36 object-cover object-center"
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
        <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <div className="flex space-x-2 my-2 flex-wrap">
          {experience?.technologies?.map((technology) => (
            <div key={technology?._id} className="h-10 w-10 relative">
              <Image
                className="rounded-full"
                objectFit="contain"
                layout="fill"
                src={urlFor(technology?.image).url()}
                alt="tech image"
              />
            </div>
          ))}
        </div>

        <p className="uppercase py-5 text-gray-300">
          {dateStarted} -{" "}
          {experience.isCurrentlyWorkingHere ? "Present" : dateEnded}
        </p>
        <div className="hidden sm:block overflow-hidden overflow-y-scroll h-3/5 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
          <ul className="h-10 w-full list-disc space-y-4 ml-5 text-lg ">
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
