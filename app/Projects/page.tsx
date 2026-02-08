
import { mono } from "@/app/ui/fonts";
import { getAllProjects } from "@/lib/projects";
import ProjectThumbnail from "@/app/ui/projects_page/project-thumbnail";


export default async function Page() {
    const projects = await getAllProjects();

    return (
    <main className={`
        ${mono.className}
        w-full
        no-scrollbar
    `}>
        {/* <projectsHero /> */}

        <section
            className={`
                w-full
                h-screen
                p-20 pt-20
                bg-light-color-2
            `}
        >
            something something
        </section>

        <section className={`
            bg-light-color-1
            p-25
            grid grid-cols-3
            w-full
            gap-4
        `}>
            {projects.map((project) => (
                <ProjectThumbnail 
                    key={project.name}
                    name={project.name}
                    project={project}
                    className=""
                />
            ))}
        </section>

    </main>
    );
}