"use client";
import Image from "next/image";
import Photo from "@/public/images/Austin_4.jpg";
import styles from "@/app/test.module.css";
import AuctionEra from "@/public/images/auction-era-screenshots/Screenshot 2024-02-06 at 11.07.01 AM.png";
import HamburgerMenu from "@/components/ui/HamburgerMenu/HamburgerMenu";
import { BiDownArrow } from "react-icons/bi";
import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-10">
        <div className="lg:h-screen flex flex-col w-full">
          <div className="z-10 w-full items-center justify-end font-mono text-sm">
            <div className="lg:hidden">
              <HamburgerMenu />
            </div>
            <div className="hidden lg:gap-10 items-end lg:h-fit lg:w-auto lg:bg-none h-fit justify-end lg:flex font-roboto font-semibold">
              <a href="#about" className="hover:text-slate-600">
                About
              </a>
              <a href="#projects" className="hover:text-slate-600">
                Projects
              </a>
              <a href="#contact" className="hover:text-slate-600">
                Contact
              </a>
            </div>
          </div>

          <div className="flex flex-col w-full lg:items-start lg:pl-32 lg:justify-center lg:h-5/6 lg:text-left md:items-center md:h-1/2 h-auto items-center text-center">
            <div>
              <h2 className="font-montserrat font-bold lg:text-7xl md:text-4xl text-2xl">
                Austin Mazur
              </h2>
              <h3 className="font-montserrat font-light lg:text-5xl md:text-4xl text-2xl">
                Crafting Next-Gen Web & Mobile Solutions
              </h3>
              <br />

              {/* TODO on mount animation of a icon or something that appears from behind the developer text */}
              <p className="font-roboto font-light lg:text-xl md:text-xl text-xl lg:w-1/2">
                I'm a Full Stack Developer passionate in delivering digital
                experiences that not only function flawlessly but also make a
                real difference.
              </p>
            </div>
            {/* BMX rider */}
            {/* martial artist */}
            {/* Idea do a animation where it changes the text and with each text we have an avatar or image */}
          </div>
          <div className="lg:self-center lg:block hidden">
            <a href="#about">
              <BiDownArrow size={24} />
            </a>
          </div>
        </div>

        <div className="w-full lg:h-fit mt-12  lg:mb-24 sm:h-fit flex flex-col items-center justify-center ">
          <p
            id="about"
            className="font-montserrat lg:text-4xl md:text-2xl text-2xl"
          >
            About me
          </p>
          <div className="flex lg:flex-row lg:justify-center gap-12 lg:pt-24 md:pt-12 pt-12 items-center flex-col">
            <div className="flex w-60 h-72 rounded-md border-4 overflow-hidden">
              <Image
                className="object-cover"
                src={Photo}
                alt="Avatar"
                width={240}
                height={240}
                priority
              />
            </div>
            <p className="lg:w-2/5 w-full">
              I'm Austin and I'm{" "}
              <strong className="font-bold text-green-300">
                full-stack developer
              </strong>
              . I am a Long Island, New York native now living in Palma de
              Mallorca, Spain.
              <br />
              <br />
              I have always loved learning, eager to soak up as much knowledge
              as I can and get to experimenting and being creative in any way I
              can. I remember the second I pieced together some HTML and CSS and
              saw the results in my browser, I was hooked!
              <br />
              <br />
              What I love about programming are the endless possibilities. With
              a bit of patience, dedication and a mug full of coffee, there's no
              telling what we can build.
            </p>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-center pt-12">
          <p
            id="projects"
            className="font-montserrat lg:text-4xl md:text-2xl text-2xl"
          >
            Experience
          </p>
          <div className="flex w-full justify-center items-center flex-col py-12 lg:w-2/5">
            <div className="flex gap-7 lg:flex-col lg:items-left lg:w-full lg:gap-1">
              <p className="text-slate-500">2023 - Present</p>
              <p className="font-bold">Full Stack Developer</p>
              <a
                href="https://www.cometalabs.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-600"
              >
                Cometa Labs
              </a>
            </div>
            <p className="text-center py-4 lg:text-left">
              Develop, iterate and maintain websites and mobile applications for
              startups, medium sized businesses and everything in-between.
            </p>
            <div className="flex flex-wrap gap-2">
              <p className="bg-slate-700 px-4 py-1 rounded-full">Typescript</p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">React</p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">
                React Native
              </p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">Next.js</p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">Node.js</p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">Firebase</p>
              <p className="bg-slate-700 px-4 py-1 rounded-full">Figma</p>
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-center pt-12 ">
          <p
            id="projects"
            className="font-montserrat lg:text-4xl md:text-2xl text-2xl"
          >
            Projects
          </p>
          <div
            className="flex w-full lg:flex-row justify-center items-center gap-4 py-12 flex-col hover:cursor-pointer"
            onClick={() => {
              router.push("/project-details/auction-era");
            }}
          >
            <div className="lg:w-1/2 w-full">
              <Image
                style={{ borderRadius: 6 }}
                src={AuctionEra}
                className="object-cover"
                alt="project-screenshot"
              />
            </div>
            <div className="bg-slate-800 lg:w-1/4 lg:text-right h-fit p-4 rounded-md w-full text-center">
              <p className="text-xl lg:text-3xl">Auctioning Platform</p>
              <p className="leading-tight mt-4">
                A website that connects buyers and sellers in a auction styled
                marketplace.
                <br />
                Offering a dual-role system where users can register either as a
                buyer or seller. Place bids on items or list your own treasures
                for auction.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row justify-center items-center gap-4 pt-12 pb-12 w-full flex-col">
            <div className="bg-slate-800 lg:w-1/4 lg:text-right h-fit p-4 rounded-md w-full text-center">
              <p className="text-xl lg:text-3xl">Auctioning Platform</p>
              <p className="leading-tight mt-4">
                A website that connects buyers and sellers in a auction styled
                marketplace.
                <br />
                Offering a dual-role system where users can register either as a
                buyer or seller. Place bids on items or list your own treasures
                for auction.
              </p>
            </div>
            <div className="lg:w-1/2 w-full">
              <Image
                style={{ borderRadius: 6 }}
                src={AuctionEra}
                className="object-cover"
                alt="project-screenshot"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-fit flex flex-col items-center mt-12">
          <p
            id="contact"
            className="font-montserrat lg:text-4xl md:text-2xl text-2xl"
          >
            Get in touch
          </p>
          <div className="flex justify-evenly items-center lg:w-1/2 w-full mt-12">
            <a href="mailto:mazuraustin1@gmail.com">
              <MdOutlineEmail size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AustinTMazur"
            >
              <FaXTwitter size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/austin-mazur/"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/austinmazur1"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
