
import { SectionProps } from "@/lib/props";
import { getGalleryLinks } from "@/lib/gallery";
import GalleryFrame from "@/app/ui/personal/photography/gallery-frame";
import Image from "next/image";

export default async function PhotographySection({ section_id, section_className }: SectionProps) {
    const galleryItems = await getGalleryLinks();

    return (
        <section id={`${section_id}`} className={`
            ${section_className}
            py-10 px-5
            md:py-10 md:px-20
            h-fit w-full
            bg-light-color-1
            flex flex-col
            gap-5
        `}>
            {/* Header */}
            <div className="h-fit">
                <h1 className="text-5xl">Photography</h1>
            </div>

            {/* Text and thumbnail */}
            <div className="
                flex flex-col md:flex-row
                gap-3
            ">
                <p className="
                    w-full
                ">
                    Something to do with like documentation and organizing for fun
                </p>
                <div className="
                    hidden md:flex
                    aspect-video
                    w-full h-full
                    border
                    justify-center items-center
                ">
                    <Image src="/personal/photo" alt="some picture" width={800} height={450}
                    className="
                        object-contain
                        w-full h-full
                    "/>
                </div>
            </div>
            {/* 'Gallery' Thumbnails */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {galleryItems.map((item) => (
                    <GalleryFrame
                        key={item.name}
                        thumbnail={item.thumbnail}
                        name={item.name}
                        href={item.href}
                    />
                ))}
            </div>
        </section>
    )
}