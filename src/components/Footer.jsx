"use client";
import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Header({ title }){
    const router = useRouter();

  function handleAbout() {
    router.push("/");
  }

  return (
    <div className="flex flex-row justify-center items-center p-2 bg-blue-300">
      <button onClick={handleAbout} className="p-4">Liz Yeh</button>
      <a
        href="mailto:lizr.yeh@gmail.com"
        className="p-2"
        >Email</a>
      <a
        href="/ElizabethYehResume.pdf"
        target="_blank"
        className="p-2"
        >Resume</a>

        <a
        href="https://www.linkedin.com/in/lizyeh"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2"
        >LinkedIn</a>
    </div>
  );
}