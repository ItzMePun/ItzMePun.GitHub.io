import ExperienceHeader from "@/app/ui/landing_page/experience-section/experience-header";
import ExperienceCards from "@/app/ui/landing_page/experience-section/experience-cards";
import { SectionProps } from "@/lib/props";

export default async function ExperienceSection({section_id, section_className}: SectionProps) {
    return (
        <section id={section_id} className={`
            bg-light-color-2
            w-full 
            flex flex-col
            justify-around 
            px-25 py-10
            gap-10
            ${section_className}
        `}>
            {/* Experience header - especially the education cards
            are still a work in progress - style it better */}
            <ExperienceHeader /> 
            <ExperienceCards />
        </section>
    );
}
