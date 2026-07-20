import Header from "@/components/Header";

export default function Projects() {
  return (
    <div className="flex flex-col items-center">
      <h1>Contact Me</h1>
      <h3>I would love to hear from you!</h3>
      <div className="flex flex-col items-center">
        <a
          href="/ElizabethYehResume.pdf"
          target="_blank"
          className="mx-3 my-3 px-2 border-2 border-orange-900"
        >
          click to see my resume
        </a>
        <a href="mailto:lizr.yeh@gmail.com" className="mx-3">
          email me at lizr.yeh@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/lizyeh"
          target="_blank"
          className="mx-3"
        >
          connect with me on LinkedIn at linkedin.com/in/lizyeh
        </a>
      </div>
    </div>
  );
}
