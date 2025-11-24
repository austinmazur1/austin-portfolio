import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center py-24">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Austin Mazur
          <br />
          <span className="text-muted-foreground">Full‑Stack Developer</span>
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
        I build modern, responsive, and scalable applications across web and mobile, with a focus on clean UX and reliable performance.
        </p>
        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
