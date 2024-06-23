import React from "react";
import { Meteors } from "../components/ui/meteors";

export default function Contact() {
  return (
    <div className="h-screen w-full bg-gradient-to-tl to-gray-700 from-gray-800">
      <div className="flex flex-col items-center justify-center py-28 ">
        <h1 className="text-4xl md:text-7xl font-bold p-10">Contact Us</h1>

        <form
          action=""
          method="post"
          className="flex flex-col text-gray-700 md:w-2/5 w-full px-5 gap-6"
        >
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-none rounded-md px-5 py-4  outline-none "
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border-none rounded-md px-5 py-4  outline-none "
          />
          <textarea name="decription" placeholder="Write your problem here" className="border-none rounded-md h-[300px] px-5 py-4  outline-none " ></textarea>
          <button
            type="submit"
            className="md:px-4 md:py-3 px-5 py-4 bg-black text-white rounded-full md:w-3/12 hover:bg-slate-900 hover:outline"
          >
            
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
