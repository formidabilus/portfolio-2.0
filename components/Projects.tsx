import React from "react";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4];
  return (
    <div className="h-screen relative flex flex-col justify-evenly items-center text-left md:flex-row max-w-full mx-auto overflow-hidden z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div
            key={project}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <img src="" alt="project" />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                project title
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                harum ad accusantium repudiandae veritatis aspernatur reiciendis
                molestiae, nulla consectetur eos incidunt earum soluta,
                blanditiis repellendus! Quae veniam voluptatibus illo
                dignissimos!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
