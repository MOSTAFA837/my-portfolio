import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import apple from "@/public/apple.png";
import ecommerce from "@/public/ecommerce.png";
import gpt from "@/public/gpt.png";
import lambo from "@/public/lambo.png";
import netflix from "@/public/netflix.png";
import threadsclone from "@/public/threads-clone.png";
import travel from "@/public/travel.png";
import stackoverflow from "@/public/stackoverflow.png";
import easebank from "@/public/ease-bank.png";
import tesla from "@/public/tesla.png";
import discordclone from "@/public/discordclone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Stack Overflow Clone",
    description:
      "User can ask a question and answer questions, with voting/down voting system and reputation system.",
    tags: ["Next.js 14", "Mongodb", "Tailwind", "Typesctipt"],
    imageUrl: stackoverflow,
    category: "next.js",
    live: "https://nextjs-stack-overflow.vercel.app",
    github: "https://github.com/MOSTAFA837/nextjs-stack-overflow",
  },
  {
    title: "Mern Ecommerce",
    description: "full stack ecommerce app using MERN technologies.",
    tags: ["React", "Express", "MongoDB", "Nodejs"],
    imageUrl: ecommerce,
    category: "mern",
    live: "",
    github: "",
  },
  {
    title: "Ease bank",
    description: "A landing page with vanilla javascript and scss.",
    tags: ["js", "scss"],
    imageUrl: easebank,
    category: "javascript",
    live: "https://mostafa837.github.io/EaseBank/",
    github: "https://github.com/MOSTAFA837/EaseBank",
  },
  {
    title: "Tesla clone",
    description: "A landing page with react javascript and framer motion.",
    tags: ["React", "css", "framer motion"],
    imageUrl: tesla,
    category: "react",
    live: "https://tesla1.netlify.app/",
    github: "https://github.com/MOSTAFA837/GPT-3",
  },
  {
    title: "Threads Clone",
    description:
      "An Application lets you post a thread and give comment to other's threads.",
    tags: ["TypeScript", "Next.js 13", "Tailwind", "Prisma"],
    imageUrl: threadsclone,
    category: "next.js",
    live: "https://next13-threads-clone.vercel.app",
    github: "https://github.com/MOSTAFA837/next13-threads-clone",
  },
  {
    title: "Apple ecommerce",
    description: "A landing page with vanilla javascript and scss.",
    tags: ["JS", "scss"],
    imageUrl: apple,
    category: "javascript",
    live: "https://apple-e-commerce-tan.vercel.app/",
    github: "https://github.com/MOSTAFA837/apple-e-commerce",
  },
  {
    title: "GPT",
    description: "A landing page with vanilla react.js ",
    tags: ["React", "css"],
    imageUrl: gpt,
    category: "react",
    live: "https://gpt-3-one.vercel.app/",
    github: "https://github.com/MOSTAFA837/GPT-3",
  },
  {
    title: "Lamborgini",
    description: "A landing page with vanilla javascript.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: lambo,
    category: "react",
    live: "https://mostafa837.github.io/Lamborghini/",
    github: "https://github.com/MOSTAFA837/Lamborghini",
  },
  {
    title: "Netflix clone",
    description: "Netflix clone with react.js.",
    tags: ["React", "css", "IMDB API"],
    imageUrl: netflix,
    category: "react",
    live: "https://clone-netflix-1.netlify.app/",
    github: "https://github.com/MOSTAFA837/GPT-3",
  },
  {
    title: "Travel",
    description: "A landing page with vanilla javascript and scss.",
    tags: ["js", "css"],
    imageUrl: travel,
    category: "javascript",
    live: "https://mostafa837.github.io/TheRoad/",
    github: "https://github.com/MOSTAFA837/TheRoad",
  },
  {
    title: "Discord Clone",
    description:
      "A popular communication platform designed for creating communities and facilitating real-time, text, voice, and video communication.",
    tags: ["TypeScript", "Next.js 13", "Tailwind", "Prisma"],
    imageUrl: discordclone,
    category: "next.js",
    live: "https://discord-clone-sage-zeta.vercel.app",
    github: "https://github.com/MOSTAFA837/discord-clone",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
