"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <h2 className="mb-12 text-3xl font-bold tracking-tight">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="flex flex-col justify-between bg-secondary/20 border-card shadow-none"
          >
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
                {project.isPublished === false && (
              
                  <Badge variant="outline" className="text-xs">
                    Work in progress
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="animate-fade-in"
                  >
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                  </motion.div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Link
                href={project.links.github}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Github className="h-4 w-4" /> Code
              </Link>
              {project.isPublished !== false && (
                <Link
                  href={project.links.demo}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </Link>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
