"use client";

import React from "react";
import ScrollToTop from "react-scroll-to-top";

export default function ScrollToTopComp() {
  return (
    <ScrollToTop
      smooth
      className="flex justify-center items-center z-[9999]"
      style={{
        zIndex: 9999,
        right: "1rem",
      }}
    />
  );
}
