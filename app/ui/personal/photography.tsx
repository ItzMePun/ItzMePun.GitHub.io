
import { SectionProps } from "@/lib/props";

export default function PhotographySection({ section_id, section_className }: SectionProps) {
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
            <div className="h-fit">
                <h1 className="text-5xl">Photography</h1>
            </div>
            <div className="
                flex
            ">
                <p className="
                    w-full
                ">
                    Something to do with like documentation and organizing for fun
                </p>
                <div className="
                    w-full h-full bg-amber-200
                ">
                    <img src="/personal/photo" alt="some picture" className=""/>
                </div>
            </div>
        </section>
    )
}