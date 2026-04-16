"use client";

import Image from "next/image";
import { CldImage } from "next-cloudinary";
import { toCloudinaryPublicId } from "@/lib/cloudinary";

interface ProjectHeroImageProps {
    src?: string;
    alt: string;
}

export default function ProjectHeroImage({ src, alt }: ProjectHeroImageProps) {
    if (!src) {
        return (
            <Image
                src="/placeholder.jpg"
                alt={alt}
                fill
                className="object-contain"
            />
        );
    }

    return (
        <CldImage
            src={toCloudinaryPublicId(src)}
            alt={alt}
            fill
            className="object-contain"
            crop={{
                type: "auto",
                source: true,
            }}
        />
    );
}
