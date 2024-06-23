import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export function Webinars() {
  return (
    <>
    <div className="flex flex-col justify-center items-center py-20" >

    <h3 className="text-3xl font-semibold tracking-wider">
        Enhance your Musical Journey
      </h3>

    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
    <Link  href={"/"}>
        <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg">
          Learn More
        </button>
      </Link>
    </div>
    </>
  );
}
export const projects = [
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
