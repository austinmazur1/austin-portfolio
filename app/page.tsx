import Image from "next/image";
import Photo from "@/public/images/Austin_4.jpg";
import styles from "@/app/test.module.css";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-10">
        <div className="h-screen flex flex-col w-full">
          <div className="z-10  w-full items-center justify-end font-mono text-sm lg:flex">
            <div className="fixed bottom-0 gap-10 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
              <a href="#about" className="hover:text-slate-600">
                About
              </a>
              <div className={styles.test} />
              <a href="#projects" className="hover:text-slate-600">
                Projects
              </a>
              <div className={styles.test2} />
              <a href="#contact" className="hover:text-slate-600">
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center w-full h-screen">
            <p>Hey there!</p>
            {/* TODO on mount animation of a icon or something that appears from behind the developer text */}
            <p>I'm Austin and I am a Full Stack Developer</p>
            {/* BMX rider */}
            {/* martial artist */}
            {/* Idea do a animation where it changes the text and with each text we have an avatar or image */}
          </div>
        </div>

        <div className="w-full h-screen flex flex-col items-center pt-12 justify-center">
          <p id="about" className="">
            About me
          </p>
          <div className="flex justify-evenly pt-24 items-center">
            <div className="flex w-60 h-72 rounded-full border-8 overflow-hidden">
              <Image
                className="object-cover"
                src={Photo}
                alt="Avatar"
                width={240}
                height={240}
                priority
              />
            </div>
            <p className="w-1/2">
              I'm a full-stack developer with experience in React, ExpressJS,
              NextJS, Tailwind, React Native and Firebase. I am a Long Island
              New York native but after a few years traveling I eventually
              settled down in Spain.
              <br />
              <br />
              I have always been an avid learner, eager to soak up as much
              knowledge as I can and get to experimenting and getting creative
              in any way I can. I remember the second I pieced together some
              HTML and CSS and saw the results in my browser I was hooked!
              <br />
              <br />I am a BMX rider, a martial artist, a coffee enthusiast, all
              outlets to express myself. What I love about programming is it
              scratches that same itch. The possibilities are endless and with a
              bit of patience, hard work and eagerness to learn and grow the
              necessary skills, there's no telling what we can build.
            </p>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col items-center pt-12 ">
          <p id="projects" className="">
            Projects
          </p>
          <div className="flex w-full justify-center gap-4 h-screen pt-12 pb-12">
            <div className="bg-blue-500 w-1/3 h-96">proj1</div>
            <div className="bg-blue-800 w-1/3">Description</div>
          </div>
          <div className="flex w-full justify-center gap-4 h-screen mb-12">
            <div className="bg-blue-500 w-1/3 h-96">proj1</div>
            <div className="bg-blue-800 w-1/3">Description</div>
          </div>
        </div>

        <div className="w-full h-screen flex flex-col items-center mt-12">
          <p id="contact" className="">
            Contact
          </p>
        </div>
      </main>
    </>
  );
}
