import fs from "node:fs/promises";
import path from "node:path";
import { notFound } from "next/navigation";
import { mono } from "@/app/ui/fonts";
import GalleryClient from "@/app/ui/personal/photography/gallery-client";
import { getCldImages } from 'next-cloudinary';

function titleFromFolderName(folderName: string): string {
    return folderName
        .replace(/[-_]/g, " ")
        .replace(/(\d{4})$/, " $1")
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}



export async function generateStaticParams(): Promise<Array<{ id: string }>> {
    const photographyRoot = path.join(process.cwd(), "public", "personal", "photography");
    const entries = await fs.readdir(photographyRoot, { withFileTypes: true });

    return entries
        .filter((entry) => entry.isDirectory())
        .map((entry) => ({ id: entry.name }));
}

export const dynamicParams = false;

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const galleryId = params?.id;

    if (!galleryId) {
        notFound();
    }

    if (!images || images.length === 0) {
        notFound();
    }

    const galleryTitle = titleFromFolderName(galleryId);
        const images = await getCldImages({
        expression: galleryId
    })

    return <GalleryClient galleryTitle={galleryTitle} images={images} rootClassName={mono.className} />;
}