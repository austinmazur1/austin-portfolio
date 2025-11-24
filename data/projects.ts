interface Project {
    title: string;
    description: string;
    tags: string[];
    isPublished?: boolean;
    links: {
        demo: string;
        github: string;
    };
}
export const projects: Project[] = [
    {
        title: "BJJ Journal",
        description:
            "A web application for tracking your BJJ training sessions and progress.",
        tags: ["Next.js", "TypeScript", "Tailwind" ,"MongoDB", "NextAuth"],
        isPublished: false,
        links: {
            demo: "https://bjj-journal.vercel.app",
            github: "https://github.com/austinmazur1/BJJJournal",
        },
    },
];
