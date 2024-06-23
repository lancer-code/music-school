import React from "react";

import { Spotlight } from "./ui/Spotlight";

import {
  TypewriterEffect,
  TypewriterEffectSmooth,
} from "./ui/typewriter-effect";
import { Button } from "./ui/moving-border";

export function HeroSection() {
  const words = [
    {
      text: "Master ",
      className: "text-2xl md:text-6xl",
    },
    {
      text: "the ",
      className: "text-2xl md:text-6xl",
    },
    {
      text: "Art ",
      className: "text-2xl md:text-6xl",
    },
    {
      text: "of ",
      className: "text-2xl md:text-6xl",
    },
    {
      text: "Music ",
      className: "text-2xl md:text-6xl",
    },
  ];
  return (
    <div className="h-[40rem] w-full rounded-md flex  flex-col md:items-center items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 mt-10 md:mt-0 md:pt-0">
        <h1 className="text-6xl md:text-7xl  flex items-center font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmooth
            cursorClassName="bg-white h-[2rem] md:mt-2 md:h-[4rem]"
            className="mx-auto  "
            words={words}
          />
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Dive into our comprehensive music courses and transform your journey
          today. Wheter you are bigniner or looking to refine your skill, join
          us to unlock your true potential
        </p>
      </div>
      <div>
        <Button
          borderRadius="1.75rem"
          className="bg-white  font-semibold tracking-wider dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          Explore More
        </Button>
      </div>
    </div>
  );
}
