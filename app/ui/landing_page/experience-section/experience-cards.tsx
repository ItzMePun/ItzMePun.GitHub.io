
import Image from "next/image";
import { GetExperiences } from "@/lib/getExperience";



export default async function ExperienceCards({ experience }) {
    console.log("ExperienceCards received:", experience);
    return (
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
                        relative
                    `}>
                        <Image 
                            src={experience.thumbnail}
                            alt={experience.employer}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
    );
}