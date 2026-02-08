import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { ProjectProps } from "@/lib/props";

function resolveProjectFilename(project: string): string {
	if (project.endsWith(".md")) return project;
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

export async function getProjectByName(project: string): Promise<ProjectProps | null> {
	const projectsPath = path.join(process.cwd(), "content", "projects");
	const filename = resolveProjectFilename(project);
	const filePath = path.join(projectsPath, filename);

	try {
		const fileContent = await fs.readFile(filePath, "utf8");
		const { data, content } = matter(fileContent);

		return {
			name: String(data["name"] ?? ""),
			thumbnail: String(data["thumbnail"] ?? null),
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
				.filter(file => file.endsWith(".project.md"))
				.map(async (file) => {
					const filePath = path.join(projectsPath, file);
					const fileContent = await fs.readFile(filePath, 'utf8');
					const { data, content } = matter(fileContent);
					return {
						name: data['name'],
						thumbnail: data['thumbnail'],
						summary: data['summary'],
						pictures: data['pictures'],
						content: content
					};
				})
		)

		return projects;

	} catch (error) {
		console.error(`Error reading project file: `, error);
		return [];
	}
}