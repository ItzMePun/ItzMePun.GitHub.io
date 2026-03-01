
import { SectionProps } from "@/lib/props";

export default function MusicSection({ section_id, section_className}: SectionProps) {
    return (
        <section id={`${section_id}`}
        className={`
            ${section_className}
            bg-light-color-2
            h-(--section-height)
            py-10 px-5
            md:py-10 md:px-20
            flex flex-col
            gap-10
        `}>
            <div className="">
                <h1 className="text-5xl font-extrabold">Music</h1>
            </div>
            <div className="
                flex flex-row
                h-full
                gap-5
            ">
                {/* Left side */}
                <div className="
                    flex flex-col
                    w-full h-full
                    justify-between
                    gap-5
                ">
                    <div className="
                        h-[60%]
                        flex
                        justify-center
                        items-center
                        overflow-hidden
                        border
                    ">
                        <img src="" alt="band pic 1"
                        className="
                        "/>
                    </div>
                    <div className="
                        h-[40%]
                        flex
                        justify-center
                        items-center
                    ">
                        <img src="" alt="Guitar Icon"
                        className="
                        "/>
                    </div>
                </div>
                {/* Right side */}
                <div className="
                    flex flex-col
                    w-full h-full
                    gap-5
                    justify-between
                ">
                    <div className="
                        h-[40%]
                    ">
                        <p>
                            I was in a band through the last 2 years of highschool, being the lead guitar.

                        </p>
                    </div>
                    <div className="
                        h-[60%]
                        flex
                        justify-center
                        items-center
                        overflow-hidden
                        border
                    ">
                        <img src="" alt="band pic 2"
                        className="
                        "/>
                    </div>
                </div>
            </div>
        </section>
    )
}