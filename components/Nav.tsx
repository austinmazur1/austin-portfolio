"use client";
import styles from "@/app/test.module.css";
import { RefObject, useRef } from "react";

function Nav() {
 

  const scrollToSection = (ref: any) => {
      if (ref.current) {
        console.log('ref', ref.current.offsetTop)
      window.scrollTo({ top: ref.current.offsetTop - 100, behavior: "smooth" });
    }
  };


  return (
    <div className="z-10  w-full items-center justify-end font-mono text-sm lg:flex">
      <div className="fixed bottom-0 gap-10 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          ref={aboutRef}
          onClick={() => scrollToSection(aboutRef)}
          className="hover:text-slate-600"
        >
          About
        </a>
        <div className={styles.test} />
        <a
          ref={projectsRef}
          onClick={() => scrollToSection("projects")}
          className="hover:text-slate-600"
        >
          Projects
        </a>
        <div className={styles.test2} />
        <a
          
          onClick={() => scrollToSection("contact")}
          className="hover:text-slate-600"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Nav;
