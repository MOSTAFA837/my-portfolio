"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsEye, BsGithub } from "react-icons/bs";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  live,
  github,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 relative overflow-hidden md:w-[600px]"
    >
      {live !== "" &&
        // @ts-ignore
        github !== "" && (
          <div
            className="absolute justify-start gap-4 pl-8 items-center rounded-md hidden md:flex
            bg-gradient-to-t from-[#999999] to-white/80 dark:from-white/40 dark:to-[#2c2c2c] transition w-full
            h-[50%] bottom-[-200px] z-20 group-hover:bottom-0"
          >
            <Link
              href={github}
              target="_blank"
              className="bg-white p-2 text-black rounded-md"
            >
              <div className="flex items-center gap-2">
                <BsGithub /> github
              </div>
            </Link>

            <Link
              href={live}
              target="_blank"
              className="bg-white p-2 text-black rounded-md"
            >
              <div className="flex items-center gap-2">
                <BsEye /> live preview
              </div>
            </Link>
          </div>
        )}

      <section
        className="bg-gray-100 max-w-[42rem] border
          border-black/5 rounded-lg overflow-hidden sm:pr-8
          relative sm:h-[20rem] hover:bg-gray-200 transition
          sm:group-even:pl-8 dark:text-white dark:bg-white/10
          dark:hover:bg-white/20"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 
            sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition z-30
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-40"
        />

        {live !== "" &&
          // @ts-ignore
          github !== "" && (
            <div className="flex justify-evenly mb-6">
              <Link
                href={github}
                target="_blank"
                className="bg-[#5c5c5c] p-2 rounded-full hover:bg-[#3b3b3b] text-sm"
              >
                <div className="flex items-center gap-2">
                  <BsGithub /> github
                </div>
              </Link>

              <Link
                href={live}
                target="_blank"
                className="bg-[#5c5c5c] p-2 rounded-full hover:bg-[#3b3b3b] text-sm"
              >
                <div className="flex items-center gap-2">
                  <BsEye /> live preview
                </div>
              </Link>
            </div>
          )}
      </section>
    </motion.div>
  );
}
