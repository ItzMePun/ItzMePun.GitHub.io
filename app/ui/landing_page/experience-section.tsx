import ExperienceHeader from "@/app/ui/landing_page/experience-section/experience-header";
import ExperienceCards from "@/app/ui/landing_page/experience-section/experience-cards";
import { GetExperiences } from "@/lib/getExperience";
import { SectionProps } from "@/lib/props";

export default async function ExperienceSection({ section_id, section_className }: SectionProps) {
    const recentExperience = await GetExperiences(3);
    console.log("Recent Experience:", recentExperience);

    return (
        <section id={section_id} className={`
            bg-light-color-2
            w-full 
            flex flex-col
            justify-around 
            px-10 md:px-25 py-10
            gap-10
            ${section_className}
        `}>
            {/* Experience header - especially the education cards
            are still a work in progress - style it better */}
            <ExperienceHeader />
            <div className={
                `
                    flex flex-col md:flex-row
                    justify-between items-center
                    gap-5 md:gap-0
                `}>
                <ExperienceCards experience={recentExperience[0]} />
                <ExperienceCards experience={recentExperience[1]} />
                <ExperienceCards experience={recentExperience[2]} />
            </div>
            <div className = {`
            bg-light-color-2
            w-full
            `}>
                Learn more about my experiences <a href="/Experience" className="underline text-xl">here</a>
            </div>
        </section>
    );
}
