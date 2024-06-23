import React from "react";

import { CardBody, CardContainer, CardItem } from "@/app/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

const musicCourses = [
  {
    title: "Music Theory Fundamentals",
    description:
      "Learn the building blocks of music, including notation, scales, chords, and harmony.",
  },
  {
    title: "Ear Training and Sight Reading",
    description:
      "Develop your musical ear and sight-reading skills to become a more well-rounded musician.",
  },
  {
    title: "Music Production and Recording",
    description:
      "Explore the world of music production, from recording techniques to mixing and mastering.",
  },
  {
    title: "Guitar for Beginners",
    description:
      "Learn the basics of guitar playing, including chords, strumming patterns, and fingerpicking techniques.",
  },
  {
    title: "Piano for All Levels",
    description:
      "Develop your piano skills, regardless of your experience level, with personalized instruction.",
  },
  {
    title: "Vocal Techniques and Performance",
    description:
      "Improve your vocal skills, learn proper breathing techniques, and gain confidence in your singing.",
  },
];

export default function AllCourses() {
  return (
    <div>
      <h1 className="mt-28 md:py-24 md:my-12 text-4xl md:text-7xl font-bold text-center">
        All Courses ({musicCourses.length})
      </h1>

      <div className="flex px-4 ">
        <div className="flex flex-wrap gap-12   justify-center">
          {musicCourses.map((Course) => (
            <div className="-mb-32 " key={Course.title}>
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    {Course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                  >
                    {Course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href="https://twitter.com/mannupaaji"
                      target="__blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Learn More →
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as="button"
                      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                      Enroll Now
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}
