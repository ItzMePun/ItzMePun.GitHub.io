
import { SectionProps } from "@/lib/props";

export default function VideoSection({section_id, section_className}: SectionProps) {
    return (
        <section id={`${section_id}`} className={`
            ${section_className}
            bg-light-color-1
            h-fit
            w-full
            py-10 px-5
            md:py-10 md:px-20
        `}>

            <div className="
                flex
                gap-10
            ">
                <div className="
                    w-[40%]
                    flex flex-col
                    justify-start
                    gap-5
                ">
                    <h1 className="text-5xl">Videography</h1>
                    <p>
                        I sometimes like to document my journeys in the form of video as I find them fun to 
                        look back on.
                    </p>
                </div>
                <div className="
                    aspect-video
                    w-[60%]
                    flex justify-center items-center
                    p-5 
                ">
                    <img src="" alt="Video Thumbnail" className="
                        border
                        w-full h-full
                    "/>
                </div>
            </div>
        </section>
    )
}