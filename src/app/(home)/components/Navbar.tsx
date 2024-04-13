import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiTwitter,
  SiX,
} from "react-icons/si";

export default function Navbar({ className }: { className?: string }) {
  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/C-W-D-Harshit",
      icon: SiGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/cwd-harshit",
      icon: SiLinkedin,
    },
    {
      name: "X",
      url: "https://twitter.com/cwd_harshit",
      icon: SiX,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/cwd.harshit",
      icon: SiInstagram,
    },
  ];
  return (
    <nav
      className={cn(
        "py-6 md:py-8 lg:py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        harshitSharma 👨🏼‍💻
      </h1>
      <div className="flex items-center gap-2.5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link key={index} href={social.url} aria-label={social.name}>
              <Icon className="size-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
