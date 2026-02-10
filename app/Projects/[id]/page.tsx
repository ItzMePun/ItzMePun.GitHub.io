import { notFound } from "next/navigation";
import { getProjectByName } from "@/lib/projects";

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