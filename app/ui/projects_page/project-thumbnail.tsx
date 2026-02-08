
import { ProjectThumbnailProps } from "@/lib/props";

export default function ProjectThumbnail({ name, project, className }: ProjectThumbnailProps) {

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
                <div className="relative w-full">
                    <h2 className="text-2xl font-semibold overflow-x-auto whitespace-nowrap no-scrollbar pr-6">
                        {project?.name ?? name}
                    </h2>
                    <span
                        className="
                            pointer-events-none
                            absolute
                            right-0 top-0
                            h-full w-6
                            bg-linear-to-l
                            from-dark-color-1
                            to-transparent
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
                    aspect-4/3 border
                    border-black/20 bg-white/80
                    flex
                    items-center
                    justify-center
                    overflow-clip
                `}>
                    {project?.thumbnail ? (
                        <img
                            src={project.thumbnail}
                            alt={project?.name ?? name}
                            className="w-auto text-black"
                        />
                    ) : null}
                </div>
            </div>
        </article>
    );
}
