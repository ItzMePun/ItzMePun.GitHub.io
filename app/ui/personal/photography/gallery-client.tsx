"use client";

import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { toCloudinaryPublicId } from "@/lib/cloudinary";

interface GalleryClientProps {
    galleryTitle: string;
    images: string[];
    rootClassName: string;
}

function stripFileExtension(publicId: string): string {
    return publicId.replace(/\.[^/.]+$/, "");
}

export default function GalleryClient({ galleryTitle, images, rootClassName }: GalleryClientProps) {
    return (
        <main
            className={`
                ${rootClassName}
                min-h-dvh
                bg-light-color-1
                px-6 py-24 md:px-20
                flex flex-col
                gap-8
            `}
        >
            <div className="flex items-center justify-between gap-4">
                <h1 className="text-4xl md:text-5xl">{galleryTitle}</h1>
                <Link
                    href="/Personal#photo"
                    className="border-2 border-dark-color-1 px-4 py-2 rounded-xl hover:bg-light-color-2 transition-colors"
                >
                    Back to galleries
                </Link>
            </div>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:balance]">
                {images.map((src) => {
                    const transformedSrc = stripFileExtension(toCloudinaryPublicId(src));

                    return (
                        <figure
                            key={src}
                            className="mb-5 break-inside-avoid overflow-hidden border-2 border-dark-color-1"
                        >
                            <CldImage
                                src={transformedSrc}
                                alt={`${galleryTitle} photo`}
                                width={1600}
                                height={1200}
                                className="block w-full h-auto"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <figcaption className="bg-light-color-2 p-2 text-xs break-all">
                                src: {src}
                                <br />
                                toCloudinaryPublicId(src): {transformedSrc}
                            </figcaption>
                        </figure>
                    );
                })}
            </div>
        </main>
    );
}
