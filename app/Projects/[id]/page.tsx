import { notFound } from "next/navigation";
import { getAllProjects, getProjectByName } from "@/lib/projects";

export const dynamicParams = false;

export async function generateStaticParams() {
  // IMPORTANT: generate IDs from filenames OR a stable slug field.
  // If you're currently using `name` in your frontmatter, that can be empty/undefined.
  const projectsDir = await getAllProjects();

  // If your route uses the *filename slug* (recommended),
  // you should switch getAllProjects() to return that slug.
  // For now, this assumes `name` is actually the slug (e.g. "bamboo-project").
  return projectsDir
    .map((p) => p.name)
    .filter(Boolean)
    .map((id) => ({ id }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getProjectByName(params.id);

  if (!project) notFound();

  return (
    <main>
      {project.thumbnail && (
        <img src={project.thumbnail} alt={project.name || params.id} className="w-full" />
      )}
    </main>
  );
}
