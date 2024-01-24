"use client";

import { motion } from "framer-motion";
import { FaGithubSquare, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; 2024 Mostafa. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium mt-4">
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/MOSTAFA837?tab=repositories"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/profile.php?id=100004228836620"
          target="_blank"
        >
          <FaFacebook />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.facebook.com/profile.php?id=100004228836620"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}
