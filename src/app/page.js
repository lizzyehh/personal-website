"use client";
import FallingText from "../components/FallingText";

export default function HomePage() {
  return (
    <main className="h-full flex flex-col items-center justify-baseline">
      <div className="flex flex-col">
        <h3>Hi, I&apos;m</h3>
        <h1 className="group cursor-default">
          <span className="transition-opacity duration-300 group-hover:opacity-10">
            E
          </span>
          <span>LIZ</span>
          <span className="transition-opacity duration-300 group-hover:opacity-10">
            ABETH
          </span>
        </h1>
        <h1>YEH</h1>
      </div>
      <div className="relative w-5xl h-full">
        <FallingText
          text={`Creating with Curiosity, for Users. Building with Purpose, to Impact.`}
          highlightWords={["Curiosity", "Impact"]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div>
    </main>
  );
}
