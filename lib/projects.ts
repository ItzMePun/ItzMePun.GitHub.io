import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { ProjectProps } from "@/lib/props";

function resolveProjectFilename(project: string): string {
	if (project.endsWith(".md")) return project;
	if (project.endsWith(".project")) return `${project}.md`;
	return `${project}.project.md`;
}

function filenameToSlug(filename: string): string {
	if (filename.endsWith(".project.md")) {
		return filename.slice(0, -".project.md".length);
	}
	if (filename.endsWith(".md")) {
		return filename.slice(0, -".md".length);
	}
	return filename;
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

function buildProject(data: Record<string, unknown>, content: string, slug: string): ProjectProps {
	return {
		slug,
		name: String(data["name"] ?? ""),
		thumbnail: String(data["thumbnail"] ?? ""),
		summary: String(data["summary"] ?? ""),
		pictures: normalizePictures(data["pictures"]),
		content,
	};
}

export async function getProjectByName(project: string): Promise<ProjectProps | null> {
	const projectsPath = path.join(process.cwd(), "content", "projects");
	const filename = resolveProjectFilename(project);
	const slug = filenameToSlug(filename);
	const filePath = path.join(projectsPath, filename);

	try {
		const fileContent = await fs.readFile(filePath, "utf8");
		const { data, content } = matter(fileContent);

		return buildProject(data, content, slug);
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
				.filter((file) => file.endsWith(".project.md"))
				.map(async (file) => {
					const slug = filenameToSlug(file);
					const filePath = path.join(projectsPath, file);
					const fileContent = await fs.readFile(filePath, "utf8");
					const { data, content } = matter(fileContent);
					return buildProject(data, content, slug);
				})
		);

		return projects;
	} catch (error) {
		console.error("Error reading project file:", error);
		return [];
	}
}
