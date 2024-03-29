import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = { projects: Project[] };

const Projects = ({ projects }: Props) => {
  return (
    <motion.div className="h-screen relative flex flex-col justify-evenly items-center text-left md:flex-row max-w-full mx-auto overflow-hidden z-0">
      <h3 className="hidden sm:inline absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative h-screen w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44"
          >
            <a href={`${project.linkToBuild}`}>
              <motion.img
                className="hidden sm:block"
                src={urlFor(project?.image).url()}
                alt="project"
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
              />
            </a>
            <div className="space-y-10 px-0 md:px-10 max-w-6xl pt-32 md:pt-0">
              <h4 className="text-4xl pt-5 font-semibold text-center">
                <span className="">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                <a
                  className="underline decoration-[#F7AB0A] inline-flex"
                  href={`${project.linkToGit}`}
                >
                  <div className="h-10 w-10 relative">
                    <Image
                      className="rounded-full"
                      objectFit="contain"
                      layout="fill"
                      src="/github.png"
                      alt="Github"
                    />
                  </div>
                  {project?.title}
                </a>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <div key={technology._id} className="h-10 w-10 relative">
                    <Image
                      className="rounded-full"
                      objectFit="contain"
                      layout="fill"
                      src={urlFor(technology.image).url()}
                      alt="technology"
                    />
                  </div>
                ))}
              </div>

              <p className="text-lg text-center md:text-left pb-10 overflow-y-scroll h-1/3 text-ellipsis scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
