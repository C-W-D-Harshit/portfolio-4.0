"use client";

import React from "react";
import Title from "./Title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiAmazonaws,
  SiDeno,
  SiDocker,
  SiExpress,
  SiJenkins,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSass,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { text } from "stream/consumers";

export default function Skills() {
  const skills = [
    {
      text: "React",
      Icon: SiReact,
    },
    {
      text: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      text: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      text: "Express.js",
      Icon: SiExpress,
    },
    {
      text: "Nest.js",
      Icon: SiNestjs,
    },
    {
      text: "Sass",
      Icon: SiSass,
    },
    {
      text: "Nginx",
      Icon: SiNginx,
    },
    {
      text: "TypeScript",
      Icon: SiTypescript,
    },
    {
      text: "MongoDB",
      Icon: SiMongodb,
    },
    {
      text: "PostgreSQL",
      Icon: SiPostgresql,
    },
    {
      text: "Node.js",
      Icon: SiNodedotjs,
    },
    {
      text: "Deno",
      Icon: SiDeno,
    },
    {
      text: "Docker",
      Icon: SiDocker,
    },
    {
      text: "Linux",
      Icon: SiLinux,
    },
    {
      text: "Jenkins",
      Icon: SiJenkins,
    },
    {
      text: "AWS",
      Icon: SiAmazonaws,
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-8 animate-move-up">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
