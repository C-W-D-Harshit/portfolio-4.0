import Link from "next/link";
import React from "react";
import { MovingBorderButton } from "../../../components/ui/moving-border";
import Title from "./Title";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function HeroSection() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-16 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
          Nice to meet you! 👋 <br />{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm Harshit."}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "Based in India, I'm a Fullstack devloper passionate about building morden web applications that users love."
          }
        </p>
        <Link
          href={"mailto:hello@cleverdevloper.in"}
          className="inline-block group"
        >
          <Title text={"Get in touch 👉"} />
        </Link>
      </div>
      <div className="relative">
        <div className="size-72 space-y-3 mt-2 lg:mt-0 -rotate-[30deg] flex justify-center flex-col -mr-16 lg:-mr-0">
          <div className="flex gap-3 translate-x-8">
            <div className="size-24 lg:size-32 md:size-28 drop-shadow-2xl shadow-2xl rounded-2xl bg-green-500"></div>
            <div className="size-24 lg:size-32 md:size-28 drop-shadow-2xl shadow-2xl rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="size-24 lg:size-32 md:size-28 drop-shadow-2xl shadow-2xl rounded-2xl bg-indigo-500"></div>
            <div className="size-24 lg:size-32 md:size-28 drop-shadow-2xl shadow-2xl rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[35%] lg:top-[40%] right-1/2 -z-10"></div>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={"/resume.pdf"}
                target="_blank"
                className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10"
              >
                <MovingBorderButton
                  borderRadius="0.5rem"
                  className="p-3 font-semibold"
                >
                  <p>📢 Available for Work</p>
                </MovingBorderButton>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Click to download resume!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
