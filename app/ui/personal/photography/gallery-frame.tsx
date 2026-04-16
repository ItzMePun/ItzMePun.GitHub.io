'use client'

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { toCloudinaryPublicId } from "@/lib/cloudinary";

interface GalleryItemProps {
    thumbnail: string;
    name: string;
    href: string;
    className?: string;
}

export default function GalleryFrame({ thumbnail, name, href, className }: GalleryItemProps) {
    return (
        <Link
            href={href}
            className={`
                drop-shadow-[12px_12px_0_rgba(0,0,0,0.2)]
                block
                ${className}
            `}
        >
            <div className="border-2 border-dark-color-1 hover:scale-105 transition-transform duration-300">
                <CldImage
                    src={toCloudinaryPublicId(thumbnail)}
                    alt={name}
                    width={500}
                    height={500}
                    className="w-auto h-auto"
                    crop={{
                        type: "auto",
                        source: true,
                    }}
                />
            </div>
        </Link>
    );
}
