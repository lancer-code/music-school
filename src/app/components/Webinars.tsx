import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export function Webinars() {
  return (
    <>
    <div className="flex flex-col justify-center items-center py-20" >

    <h3 className="text-3xl text-center font-semibold tracking-wider">
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
const projects =[
  {
    title: "Living on a Prayer (Stripped Down)",
    description: "Bon Jovi takes it slow with a stripped-down acoustic version of their iconic anthem. Perfect for reminiscing about lost love.",
    link: "https://example.com/living-on-a-prayer-stripped-down",
  },
  {
    title: "Don't Stop Believin' (Chill Version)",
    description: "Journey's classic gets a makeover with a relaxed tempo and smooth vocals. Ideal for unwinding after a long day.",
    link: "https://example.com/dont-stop-believin-chill",
  },
  {
    title: "Bohemian Rhapsody (Piano Ballad)",
    description: "Queen's masterpiece reimagined as a poignant piano ballad. A fresh perspective on a legendary song.",
    link: "https://example.com/bohemian-rhapsody-piano",
  },
  {
    title: "Sweet Child o' Mine (Acoustic)",
    description: "Guns N' Roses' hard-hitting rock anthem gets a gentle acoustic treatment. Rediscover the emotional core of this classic.",
    link: "https://example.com/sweet-child-o-mine-acoustic",
  },
  {
    title: "Imagine (Orchestral Version)",
    description: "John Lennon's timeless message of peace is given a majestic orchestral arrangement. A beautiful way to experience this iconic song.",
    link: "https://example.com/imagine-orchestral",
  },
   {
    title: "Living on a Prayer (Stripped Down)",
    description: "Bon Jovi takes it slow with a stripped-down acoustic version of their iconic anthem. Perfect for reminiscing about lost love.",
    link: "https://example.com/living-on-a-prayer-stripped-down",
  },
  // Add more retired choruses following the same format
];
