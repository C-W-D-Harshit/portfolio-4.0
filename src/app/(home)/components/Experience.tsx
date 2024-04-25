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

export default function Experience() {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 animate-move-up">
      <Title
        text="Experience 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
    </div>
  );
}
