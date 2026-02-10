import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { ProjectProps } from "@/lib/props";

function resolveProjectFilename(project: string): string {
	// Accept:
	// - "slug"                -> "slug.project.md"
	// - "slug.project"        -> "slug.project.md"
	// - "slug.project.md"     -> as-is
	// - "slug.md"             -> as-is (if you ever use plain .md)
	if (project.endsWith(".project.md") || project.endsWith(".project.mdx")) return project;
	if (project.endsWith(".md") || project.endsWith(".mdx")) return project;
	if (project.endsWith(".project")) return `${project}.md`;
	return `${project}.project.md`;
}

function normalizePictures(pictures: unknown): string[] {
	if (Array.isArray(pictures)) {
		return pictures.map((item) => String(item)).filter(Boolean);
	}

	if (typeof pictures === "string") {
		return pictures
			.split(",")
			.map((item) => item.trim())
			.filter(Boolean);
	}

	return [];
}

// ✅ NEW: used by generateStaticParams() for static export
export async function getAllProjectIds(): Promise<string[]> {
	const projectsPath = path.join(process.cwd(), "content", "projects");
	const files = await fs.readdir(projectsPath);

	return files
		.filter((file) => file.endsWith(".project.md") || file.endsWith(".project.mdx"))
		.map((file) => file.replace(/\.project\.(md|mdx)$/, ""));
}

export async function getProjectByName(project: string): Promise<ProjectProps | null> {
	const projectsPath = path.join(process.cwd(), "content", "projects");
	const filename = resolveProjectFilename(project);
	const filePath = path.join(projectsPath, filename);

	try {
		const fileContent = await fs.readFile(filePath, "utf8");
		const { data, content } = matter(fileContent);

		return {
			name: String(data["name"] ?? ""),
			thumbnail: String(data["thumbnail"] ?? ""), // ✅ avoid "null"
			summary: String(data["summary"] ?? ""),
			pictures: normalizePictures(data["pictures"]),
			content,
		};
	} catch (error) {
		console.error(`Error reading project file: ${filePath}`, error);
		return null;
	}
}

export async function getAllProjects(): Promise<ProjectProps[]> {
	const projectsPath = path.join(process.cwd(), "content", "projects");

	try {
		const files = await fs.readdir(projectsPath);

		const projects = await Promise.all(
			files
				.filter((file) => file.endsWith(".project.md") || file.endsWith(".project.mdx"))
				.map(async (file) => {
					const filePath = path.join(projectsPath, file);
					const fileContent = await fs.readFile(filePath, "utf8");
					const { data, content } = matter(fileContent);

					return {
						name: String(data["name"] ?? ""),
						thumbnail: String(data["thumbnail"] ?? ""),
						summary: String(data["summary"] ?? ""),
						pictures: normalizePictures(data["pictures"]),
						content,
					};
				})
		);

		return projects;
	} catch (error) {
		console.error(`Error reading project files:`, error);
		return [];
	}
}
