
import { SectionProps } from "@/lib/props";
import Image from "next/image";

export default function CADSection({ section_id, section_className}: SectionProps) {
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
                <h1 className="text-5xl font-extrabold">CAD Design & 3D Modelling</h1>
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
                        relative
                    ">
                        <Image src="/personal/cad/" alt="pic 1 - should be one of the ONSHAPE ones"
                        fill
                        className="object-contain"
                        />
                    </div>
                    <div className="
                        h-[40%]
                    ">
                        <p>
                            something about using cad for fun like the japan thingy and like the chess thing
                        </p>
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
                            Something about using cad and stuff for various projects

                        </p>
                    </div>
                    <div className="
                        h-[60%]
                        flex
                        justify-center
                        items-center
                        overflow-hidden
                        border
                        relative
                    ">
                        <Image src="/personal/cad/" alt="pic 2 - maybe video of japan building or chess board"
                        fill
                        className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}