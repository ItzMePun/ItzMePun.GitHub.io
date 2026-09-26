import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export interface GalleryLink {
    slug: string;
    name: string;
    thumbnail: string;
    href: string;
}

function getGallerySlugFromThumbnail(thumbnail: string): string {
    const match = thumbnail.match(/\/personal\/photography\/([^/]+)\//i);
    return match?.[1] ?? "";
}

function normalizeGalleries(galleries: unknown): GalleryLink[] {
    if (!Array.isArray(galleries)) {
        return [];
    }

    return galleries
        .map((item) => {
            if (typeof item === "object" && item !== null) {
                const obj = item as Record<string, unknown>;
                const name = String(obj.name ?? "");
                const thumbnail = String(obj.thumbnail ?? "");
                const slug = getGallerySlugFromThumbnail(thumbnail);

                if (!name || !thumbnail || !slug) return null;

                return {
                    slug,
                    name,
                    thumbnail,
                    href: `/Personal/${slug}`,
                };
            }
            return null;
        })
        .filter((item): item is GalleryLink => item !== null);
}

export async function getGalleryLinks(): Promise<GalleryLink[]> {
    const galleryPath = path.join(process.cwd(), "content", "personal", "gallery.md");

    try {
        const fileContents = await fs.readFile(galleryPath, "utf-8");
        const { data } = matter(fileContents);

        const links = normalizeGalleries(data.galleries);
        return links;
    } catch (error) {
        console.error("Error reading gallery file:", error);
        return [];
    }
}
