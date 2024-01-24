"use client";

import React, { useState } from "react";

import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [active, setActive] = useState("all");
  const [menuItems, setMenuItems] = useState(projectsData);

  const categoriesArray = projectsData.map((cate) => cate.category);

  // @ts-ignore
  const categories = Array.from(["all", ...new Set(categoriesArray)]);

  const filterItems = (category: string) => {
    if (category === "all") {
      setMenuItems(projectsData);
      setActive("all");
      return;
    }

    const newItems = projectsData.filter((item) => item.category === category);
    // @ts-ignore
    setMenuItems(newItems);
    setActive(category);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>

      <div className="flex justify-center items-center flex-wrap gap-8 mb-8">
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() => filterItems(cat)}
            className={`py-4 px-6 rounded-lg text-center font-semibold cursor-pointer md:text-md ${
              active === cat
                ? "bg-black/80 text-white"
                : "text-black bg-white dark:bg-[#303030] dark:text-white"
            }`}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="grid xl:grid-cols-2 gap-10">
        {menuItems.map((project, index) => (
          <div key={index}>
            <Project {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
