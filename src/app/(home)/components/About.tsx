"use client";

import React from "react";
import Title from "./Title";
import Image from "next/image";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function About() {
  const words = `Hello! I’m Harshit, a full-stack developer dedicated to crafting robust and innovative web solutions. My adventure in tech started back in 2017 with a simple web design course, igniting a passion that has grown into a vibrant career. I've since expanded my horizons through freelancing, creating complex web applications that showcase my diverse skill set.

Currently, I am deepening my expertise as a developer intern, focusing on advanced ERP solutions for the construction industry. I’m driven to create efficient and impactful applications that not only meet but exceed expectations. Let's collaborate to turn your visionary ideas into reality!`;
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-move-up">
      <Title
        text="About Me 😎"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="py-16 flex flex-col-reverse lg:flex-row gap-6 justify-between items-center">
        <div className="w-full lg:w-1/2">
          <TextGenerateEffect
            className="text-sm font-medium text-balance text-center lg:text-left"
            words={words}
          />
        </div>
        <div className="w-full lg:w-1/3 relative h-96">
          <BackgroundGradient className="h-96 overflow-hidden relative w-full">
            <Image
              src="/profile.jpg"
              fill
              className="rounded-3xl object-cover"
              alt=""
            />
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
}
