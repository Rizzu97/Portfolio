"use client";
import { useState, useEffect } from "react";
import { TypewriterEffect } from "../ui/typewriter-effect";
import clsx from "clsx";

export function TypewriterEffectDemo() {
  const phrases = [
    {
      text: "Got an app idea?",
      highlightIndices: [2, 3],
    },
    {
      text: "Need a standout website?",
      highlightIndices: [2, 3],
    },
    {
      text: "Looking for software solutions?",
      highlightIndices: [2, 3],
    },
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 7500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xl md:text-2xl lg:text-4xl  mb-10">
        I bring your visions into life.
      </p>
      <TypewriterEffect
        key={currentPhraseIndex.toString()}
        words={phrases[currentPhraseIndex].text
          .split(" ")
          .map((word, index) => ({
            text: word,
            className: clsx(
              phrases[currentPhraseIndex].highlightIndices.includes(index)
                ? "text-blue-500  dark:text-blue-500"
                : "text-neutral-600 dark:text-neutral-200"
            ),
          }))}
      />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={() => {
            if ((window as any).$crisp) {
              (window as any).$crisp.push(["do", "chat:open"]);
            } else {
              console.error("Crisp non è disponibile");
            }
          }}
          className="w-64 h-12 font-semibold rounded-xl bg-black border dark:border-white border-transparent text-white text-sm"
        >
          Reach Out!
        </button>
      </div>
    </div>
  );
}
