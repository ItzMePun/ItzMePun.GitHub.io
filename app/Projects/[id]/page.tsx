import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectByName } from "@/lib/projects";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ProjectHeroImage from "@/app/ui/projects/project-hero-image";

export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    const projectsDir = path.join(process.cwd(), "content", "projects");
    const files = await fs.readdir(projectsDir);

    return files
        .filter((file) => file.endsWith(".project.md"))
        .map((file) => ({
            id: file.replace(/\.project\.md$/, ""),
        }));
}

export const dynamicParams = false;

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const project_name = params.id;
    const project = await getProjectByName(project_name);
    const hasContent = project?.content.trim().length;

    if (!project) {
        notFound();
    }

    return (
        <main
            className={`
                flex flex-col
            `}
        >
            <section className={`
                pt-20 w-full h-dvh
                bg-light-color-1
                flex
                items-center
                justify-center
                overflow-hidden
                relative
            `}>
                <ProjectHeroImage src={project?.thumbnail} alt={project.name} />
            </section>
            <section className="
                w-full
                px-[10%]
                py-[10%]
                aspect-video
                bg-light-color-2
            ">
                {hasContent ? (
                    <div className="markdown-body">
                        <Markdown
                            remarkPlugins={[remarkGfm]}
                        >
                            {project.content}
                        </Markdown>
                    </div>
                ) : (
                    <div className="
                        w-full h-full
                        flex flex-col
                        justify-center items-center
                        gap-4
                    ">
                        <p className="text-center text-lg">
                            This project page is not done yet.
                        </p>
                        <Link
                            href="/Projects"
                            className="
                                border-2
                                px-4 py-2
                                rounded-xl
                                hover:bg-light-color-1
                                transition-colors
                            "
                        >
                            Go Back
                        </Link>
                    </div>
                )}
            </section>
        </main>
    );
}
