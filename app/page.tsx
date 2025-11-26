import Hero from "@/components/Hero";
import SectionWrapper from "@/components/SectionWrapper";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Learning from "@/components/Learning";

export default function Home() {
  return (
    <main className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <About />
      </SectionWrapper>
      <SectionWrapper>
        <Experience />
      </SectionWrapper>
      <SectionWrapper>
        <Projects />
      </SectionWrapper>
      <SectionWrapper>
        <Learning />
      </SectionWrapper>
      <SectionWrapper>
        <Contact />
      </SectionWrapper>
    </main>
  );
}
