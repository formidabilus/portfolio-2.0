import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, my name is #${pageInfo?.name}`,
      "&&",
      "I am the <Developer /> you need!",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 100,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-32 h-32 mx-auto">
        <Image
          src={urlFor(pageInfo?.heroImage).url()}
          className="rounded-full object-cover"
          alt="profile"
          layout="fill"
          priority
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h2 className="text-center mx-auto sm:h-auto text-5xl lg:text-6xl font-semibold px-10">
          <span className="block text-center h-0 sm:h-auto mr-3 font-['Noto_Sans']">
            {text}
            <Cursor cursorColor="#F7AB0A" />
          </span>
        </h2>
        <div className="pt-72 mb-5 sm:mb-0 sm:pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
