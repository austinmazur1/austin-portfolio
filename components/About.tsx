"use client";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex justify-center">
      <div className="grid max-w-4xl items-center gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900/40">
          <Image
            src="/austin.PNG"
            alt="Portrait of Austin Mazur"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m Austin, a full‑stack developer from Long Island, New York,
            now based in Palma de Mallorca, Spain. I&apos;m drawn to programming
            for its mix of creativity and problem‑solving. The moment I saw my
            first HTML and CSS project come alive in the browser, I was hooked.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            These days I enjoy building modern, responsive web experiences and
            continually learning and sharpening my skills. When
            I&apos;m not coding, you&apos;ll find me riding BMX,
            training Brazilian Jiu-Jitsu, or hunting for a great cup of coffee.
          </p>
        </div>
      </div>
    </section>
  );
}