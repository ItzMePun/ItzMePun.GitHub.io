import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { getProjectByName } from "@/lib/projects";

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
        <main>
            <section className={`
                pt-20 w-full h-dvh
                bg-light-color-1
                flex
                items-center
                justify-center
                overflow-hidden
            `}>
                <img 
                    src={project.thumbnail}
                    alt={project.name}
                    className="
                    w-full
                    "
                />
            </section>
            <section className="
                w-full
                aspect-video
                bg-light-color-2
            ">
            </section>
        </main>
    );
}
