import React from "react";
import AboutBackground from "../public/assets/about.png";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col-reverse justify-center items-center py-[80px] gap-[100px] container px-6 md:flex-row md:justify-between ">
        <div className="left-block block relative w-full xl:-top-10 xl:-left-24">
          <Image src={AboutBackground} width="800" alt="About Illustration" />
        </div>
        <div className="right-block block w-full">
          <div className="text-left content text-sm text-slate-500">
            <h2 className="uppercase text-3xl mb-5 text-slate-900 font-semibold md:text-4xl">
              let’s <br />
              Introduce about <br /> myself
            </h2>
            <p className="mb-5">
              Whose given. Were gathered. There first subdue greater. Bearing
              you Whales heaven midst their. Beast creepeth. Fish days.
            </p>
            <p className="mb-8">
              Is give may shall likeness made yielding spirit a itself together
              created after sea is in beast beginning signs open god you're
              gathering whose gathered cattle let. Creature whales fruit unto
              meat the life beginning all in under give two.
            </p>
            <Link
              href=""
              download
              className="inline-block px-8 py-4 text-sm uppercase text-white font-medium rounded-full transition-all duration-300 download-clay"
            >
              <span>Download CV</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
