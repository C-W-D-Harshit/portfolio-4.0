"use client";

import React from "react";
import Title from "./Title";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {
  const imageUrl = "/project-1.png";
  return (
    <div className="mt-10">
      <Title
        text="Projects 🎯"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 mt-10">
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
        <div>
          <DirectionAwareHover imageUrl={imageUrl}>
            <p className="font-bold text-xl">In the mountains</p>
            <p className="font-normal text-sm">$1299 / night</p>
          </DirectionAwareHover>
        </div>
      </div>
    </div>
  );
}
