import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },

];

const FeaturedCourses = () => {
  return (
    <div className="bg-gray-900 flex flex-col justify-center items-center py-14 px-10">
      <h3 className="text-3xl font-semibold tracking-wider">
        Featured Courses
      </h3>
      <div className="my-10">
        <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
      </div>
      <Link href={"/"}>
        <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg">
          View All Courses
        </button>
      </Link>
    </div>
  );
};

export default FeaturedCourses;
