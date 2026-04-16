"use client";

import { ProjectThumbnailProps } from "@/lib/props";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
import { toCloudinaryPublicId } from "@/lib/cloudinary";

export default function ProjectThumbnail({ slug, project, className }: ProjectThumbnailProps) {

    return (
        <article className={`
            drop-shadow-[12px_12px_0_rgba(0,0,0,0.2)]
            ${className}
        `}>
            <div
                className="
                    flex flex-col
                    relative
                    aspect-3/4
                    bg-dark-color-1
                    text-light-color-1
                    p-6
                    pt-10
                    [clip-path:polygon(0_0,calc(100%-60px)_0,100%_60px,100%_100%,0_100%)]
                    gap-3
                "
            >
                <div className="relative w-full overflow-hidden hover:overflow-hidden group h-fit">
                    <Link
                        key={project?.slug ?? slug}
                        href={`/Projects/${project?.slug ?? slug}`}
                        className="
                            text-2xl 
                            font-semibold
                            whitespace-nowrap 
                            pr-6 
                            group-hover:whitespace-normal 
                            group-hover:warp-break-word
                        ">
                        {project?.name ?? slug}
                    </Link>
                    <span
                        className="
                            pointer-events-none
                            absolute
                            right-0 top-0
                            h-full w-6
                            bg-linear-to-l
                            from-dark-color-1
                            to-transparent
                            group-hover:hidden
                        "
                        aria-hidden="true"
                    />
                </div>
                <div className="
                    relative
                    text-sm
                    leading-6
                    h-36
                ">
                    <p className="
                        text-light-color-1/90
                        line-clamp-6
                        overflow-hidden
                    ">
                        {project?.summary ?? "Project not found"}
                    </p>
                </div>

                <div className={`
                    mt-auto
                    aspect-4/3 bord
                    flex
                    items-center
                    justify-center
                    overflow-clip
                    relative
                `}>
                    {project?.thumbnail ? (
                        <CldImage
                            src={toCloudinaryPublicId(project.thumbnail)}
                            alt={project?.name ?? slug}
                            fill
                            className="object-cover h-full w-full"
                            crop={{
                                type: "auto",
                                source: true,
                            }}
                        />
                    ) : null}
                </div>
            </div>
        </article>
    );
}
