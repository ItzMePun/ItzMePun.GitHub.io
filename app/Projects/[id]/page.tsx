import { notFound } from "next/navigation";
import { getProjectByName } from "@/lib/projects";
import fs from "node:fs/promises";
import path from "node:path";

// Adjust this if your markdown/content lives somewhere else
const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

// For static export: only allow params returned by generateStaticParams
export const dynamicParams = false;

export async function generateStaticParams() {
  const files = await fs.readdir(PROJECTS_DIR);

  return files
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .map((f) => ({
      id: f.replace(/\.(md|mdx)$/, ""),
    }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const project_name = params.id;
  const project = await getProjectByName(project_name);

  if (!project) notFound();

  return (
    <main>
      <section
        className={`
          pt-20 w-full h-dvh
          bg-light-color-1
          flex
          items-center
          justify-center
          overflow-hidden
        `}
      >
        <img src={project.thumbnail} alt={project.name} className="w-full" />
      </section>

      <section
        className="
          w-full
          aspect-video
          bg-light-color-2
        "
      />
    </main>
  );
}
