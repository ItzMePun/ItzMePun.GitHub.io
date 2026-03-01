
import Image from "next/image";
import { SkillsCardsProps } from "@/lib/props";

export default function SkillsCards({ skillsList, className }: SkillsCardsProps) {
    return (
        <div
            className={className}
        >
            {skillsList.map((skill) => (
                <div
                    key={skill.name}
                    className={`
                        w-full
                        flex flex-col
                        justify-between
                        items-center
                        relative
                        aspect-3/4
                        bg-dark-color-1
                        text-light-color-1
                        p-6
                        [clip-path:polygon(0_0,calc(70%)_0,100%_20%,100%_100%,0_100%)]
                    `}
                >
                    <div className="w-full text-center">
                        {skill.name}
                    </div>
                    <Image 
                        src={skill.icon}
                        alt={skill.name}
                        width={100}
                        height={100}
                        className="h-fit"
                    />
                </div>
            ))}
        </div>
    );
}
