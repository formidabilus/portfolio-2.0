import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import profilePicture from "../public/profile_avatar.jpg";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Razvan...",
      "and...",
      "I am the Developer you need!",
      "You can stop the search now.",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <div className="relative w-32 h-32  mx-auto">
        <Image
          src={profilePicture}
          className="rounded-full object-cover"
          alt="profile"
          layout="fill"
          priority
        />
      </div>
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">
            {text}
            <Cursor cursorColor="#F7AB0A" />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
