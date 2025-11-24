import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { experiences } from "@/data/work-experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="border-card bg-secondary/20 shadow-none">
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                <div>
                  <CardTitle className="text-xl">{exp.role}</CardTitle>
                  <CardDescription className="text-base font-medium text-primary">
                    {exp.company}
                  </CardDescription>
                </div>
                <span className="text-sm text-muted-foreground">
                  {exp.date}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{exp.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
