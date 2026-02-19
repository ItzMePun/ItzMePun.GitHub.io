import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getProjectByName } from "@/lib/projects";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
            `}>
                <img 
                    src={project?.thumbnail ?? null}
                    alt={project.name}
                    className="
                    w-full
                    "
                />
            </section>
            <section className="
                w-full
                px-[10%]
                py-[10%]
                aspect-video
                bg-light-color-2
            ">
                <div className="markdown-body">
                    <Markdown
                        remarkPlugins={[remarkGfm]}
                    >
                        {project.content}
                    </Markdown>
                </div>
            </section>
        </main>
    );
}
