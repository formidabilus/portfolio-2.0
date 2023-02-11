import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

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
    <div>
      <h1></h1>
      <span>
        {text}
        <Cursor cursorColor="red" />
      </span>
    </div>
  );
};

export default Hero;
