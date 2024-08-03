import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["React", "NextJS", "Flutter"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-5xl lg:text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Building with
        <FlipWords words={words} /> <br />
        to craft amazing web experiences
      </div>
    </div>
  );
}
