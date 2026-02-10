import { notFound } from "next/navigation";
import { getAllProjectIds, getProjectByName } from "@/lib/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
	const ids = await getAllProjectIds();
	return ids.map((id) => ({ id }));
}

export default async function Page({ params }: { params: { id: string } }) {
	const project = await getProjectByName(params.id);
	if (!project) notFound();

	return (
		<main>
			<section className="pt-20 w-full h-dvh bg-light-color-1 flex items-center justify-center overflow-hidden">
				{project.thumbnail ? (
					<img src={project.thumbnail} alt={project.name} className="w-full" />
				) : null}
			</section>

			<section className="w-full aspect-video bg-light-color-2" />
		</main>
	);
}
