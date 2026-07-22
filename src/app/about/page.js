import Header from "@/components/Header";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mt-3">About Me</h1>
      <div className="flex flex-col mx-4 mt-4 justify-center items-center">
        <div className="flex flex-row justify-center items-center">
          <Image
            src="/photoboothStrip.png"
            alt="Photo booth strip of me!"
            width={100}
            height={200}
            style={{ transform: "rotate(-15deg)" }}
            className="m-8"
          />
          <div className="flex flex-col justify-center items-center">
            <h2>I&apos;m Liz!</h2>
            <h3>I was born and raised in the suburbs of Pennsylvania.</h3>
          </div>
        </div>
        <h3>
          From a young age, I loved anything that challenged me to create or
          solve problems.
        </h3>
        <div className="flex flex-row items-center">
          <h3 className="mb-2 mx-4">
            sports,
            <br />
            music,
            <br />
            art,
            <br />
            fashion...
          </h3>
          <Image
            src="/musicfashion.jpg"
            alt="Young fashionista and violinist Elizabeth"
            width={200}
            height={300}
            style={{ transform: "rotate(10deg)" }}
            className="m-8"
          />
        </div>
        <h3>
          I thought that I would have to pick one path, but I realized computer
          science allows me to bring all my interests together
        </h3>
        <div className="flex flex-row items-center">
          <Image
            src="/laptopSimba.png"
            alt="Computer and my dog, Simba"
            width={200}
            height={300}
            className="m-8"
          />
          <p className="mb-2 mx-4">
            To me, the context behind software is just as interesting as the
            technology itself
          </p>
        </div>
        <h2>I love understanding how people work and why a problem exists,</h2>
        <div className="flex flex-row items-center">
          <h3 className="text-xl m-2">
            just as much as I love building, creating, designing the solution.
          </h3>
          <video width={200} autoPlay muted loop className="m-2">
            <source src="/studying.mp4" type="video/mp4" />
          </video>
        </div>
        <h2 className="text-center my-6">
          I&apos;m excited by opportunities where I can combine technical
          problem solving with curiosity about people and the systems they work
          in.
        </h2>
        <div className="text-center mb-4">
          <h2>That&apos;s what motivates me to</h2>
          <h1 className="text-primary-ltbrown">
            build technology that creates meaningful impact.
          </h1>
        </div>
      </div>
    </div>
  );
}
