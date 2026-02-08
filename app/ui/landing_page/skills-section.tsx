
import { mySkills, learningSkills } from "@/lib/skills";
import SkillsCards from "@/app/ui/landing_page/skills-section/skills-cards";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { SectionProps } from "@/lib/props";

export default function SkillsSection({ section_id, section_className}: SectionProps) {
    return (
        <section 
            id={section_id}
            className={`
                px-[10%] pt-10 pb-20
                flex flex-col
                bg-light-color-1
                ${section_className}
            `}
        >
            <div className={`
                    flex
                    text-4xl
                    justify-center
                    items-center
                    pb-15
                    gap-5
                `}>
                <h1>
                    My Skills
                </h1>
                <MagnifyingGlassIcon className="h-12 aspect-square"/>
            </div>
            
            <SkillsCards skillsList={mySkills} className="grid grid-cols-3 md:grid-cols-5 gap-4 h-fit"/>

            {learningSkills.length > 0 ? (
                <>
                    <div className={`
                        flex
                        text-4xl
                        justify-center
                        items-center
                        py-15
                        gap-5
                    `}>
                        <h1>
                            Currently Learning
                        </h1>
                        <MagnifyingGlassIcon className="h-12 aspect-square"/>
                    </div>
                    <SkillsCards skillsList={learningSkills} className="grid grid-cols-5 gap-4 h-fit"/>
                </>
            ) : null}
        </section>
    );
}
