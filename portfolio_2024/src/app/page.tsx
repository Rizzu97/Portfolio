"use client";

import { FlipWordsDemo } from "@/components/sections/Flipwords-demo";
import { LayoutGridDemo } from "@/components/sections/layout-demo";
import { TypewriterEffectDemo } from "@/components/sections/typewriter-demo";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 py-2">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-xl px-4 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          I am a software developer based in Italy.
          <Highlight className="text-black dark:text-white">
            I have many years of experience in consulting in all areas of
            digital.
          </Highlight>
        </motion.h1>
      </HeroHighlight>
      <FlipWordsDemo />
      <LayoutGridDemo />
      <TypewriterEffectDemo />
    </main>
  );
}
