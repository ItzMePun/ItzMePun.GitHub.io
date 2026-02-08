
import { RecentExperiences } from "@/lib/recentExperience";

export default async function ExperienceCards() {
    const recentExperience = await RecentExperiences();

    return (
        <div className={`
            flex flex-col md:flex-row
            justify-between items-center
            gap-5 md:gap-0
        `}>
            {recentExperience.map((experience) => (
                <div key={experience.role} className={`
                    flex flex-col
                    w-[80%] md:w-[33%]
                    bg-light-color-1
                    rounded-3xl
                `}>
                    <div className={`
                        text-xs
                        border-2
                        px-3 py-2
                        rounded-t-3xl
                    `}>
                        {String(experience.startDate)} - {String(experience.endDate)}
                    </div>
                    <div className={`
                        text-xs
                        flex flex-col
                        border-2 border-t-0
                        h-full
                        p-3
                        gap-3
                        rounded-b-3xl
                    `}>
                        <p className="flex justify-end">{String(experience.role)}</p>
                        <p className="flex justify-end">{String(experience.summary)}</p>
                        <div className={`
                            w-[70%]
                            aspect-square 
                            border-2 rounded-3xl 
                            flex
                            justify-center
                            items-center
                            overflow-hidden
                        `}>
                            <img 
                                src={experience.thumbnail}
                                alt={experience.employer}
                                className={`
                                `}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}