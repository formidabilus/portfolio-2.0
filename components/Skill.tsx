import React, { useState } from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  const [skillName, setSkillName] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClickSkill = () => {
    setSkillName((skillName) => skill.title);
    setClicked((clicked) => !clicked);
  };

  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border border-gray-500 object-contain w-24 h-24 md:w-20 md:h-20 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        src={urlFor(skill?.image).url()}
        alt="skill"
      />
      <motion.div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        whileInView={{
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div
          className="flex items-center justify-center h-full"
          onClick={handleClickSkill}
        >
          <span
            id="skill"
            className="text-3xl font-bold text-black opacity-100"
          >
            {clicked ? (
              <p className="text-center text-lg mx-auto">{skillName}</p>
            ) : (
              skill.progress + "%"
            )}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
