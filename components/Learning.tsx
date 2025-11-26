import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter
  } from "@/components/ui/card";
  import { learnings } from "@/data/learnings";
  import { ExternalLink } from "lucide-react";
  import Link from "next/link";
  
  export default function Learning() {
    return (
      <section id="learning" className="py-24">
        <h2 className="mb-12 text-3xl font-bold tracking-tight">Education & Learning</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {learnings.map((learning, index) => (
            <Card key={index} className="border-card bg-secondary/20 shadow-none">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{learning.title}</CardTitle>
                    <CardDescription>{learning.description}</CardDescription>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {learning.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
             
              </CardContent>
              <CardFooter>
                <Link href={learning.link} target="_blank" className="cursor-pointer flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                  <ExternalLink /> View Certificate
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    );
  }
  