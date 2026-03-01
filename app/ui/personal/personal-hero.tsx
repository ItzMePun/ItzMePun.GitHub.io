
import { SectionProps } from "@/lib/props";

export default function PersonalHero({section_id, section_className}: SectionProps) {
    return (
        <section id={`${section_id}`} className={`
            ${section_className}
            pt-20 pb-0 px-0
            md:pt-30 md:pb-10 md:px-20
            h-fit md:h-dvh
            flex flex-col md:flex-row
            md:justify-between
            items-center
            bg-light-color-2
        `}>
            <h1 className="
                absolute md:static
                text-5xl
                h-fit
                justify-center
                flex
                font-[1000]
                leading-20
                z-10
            ">
                My more <br/>"Personal" moments
            </h1>
            <div className='
                aspect-square md:aspect-auto
                w-full md:w-auto
                h-auto md:h-full
                drop-shadow-lg
                overflow-hidden
                bg-amber-50
            '>
                <img src="/personal/fireworks.jpg" alt="fireworks"
                className="
                    w-full
                    h-full
                    object-cover
                    object-bottom
                "/>
            </div>
        </section>
    )
}