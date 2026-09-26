
import { mono } from "@/app/ui/fonts";
import { GetExperiences } from "@/lib/getExperience";
import ExperienceCards from "@/app/ui/landing_page/experience-section/experience-cards";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";


export default async function Page() {
    const allExperiences = await GetExperiences(10);

    return (
        <main className= {`
        ${mono.className}
        w-full
        no-scrollbar
    `}>

    < section
    className = {`
        w-full
        h-screen
                
        p-20 pt-20
        bg-light-color-2
        flex
        items-center
    `}>
        <h1 className="text-5xl" >
            See my professional experiences and the companies I've worked for
        </h1>
    </section>

    < section className = {`
        bg-light-color-1
        p-15 sm:p-25
        w-full
        gap-4
        overflow-hidden
    `}>
        <div className={`
            bg-light-color-1
            grid
            grid-cols-1
            gap-10
            w-full
        `}>
            {allExperiences.map((experience) => (
                <div key= { experience.role } className = {`
                    flex flex-col
                    w-full
                    h-[20vw]
                    bg-light-color-2
                    rounded-3xl
                `} >
                    <div className={`
                        text-xs
                        border-2
                        px-3 py-2
                        rounded-t-3xl
                        h-[20%]
                    `}>
                    { String(experience.startDate) } - { String(experience.endDate) }
                    </div>
                    <div className = {`
                        text-xs
                        flex flex-row
                        border-2 border-t-0
                        h-[80%]
                        p-3
                        gap-3
                        rounded-b-3xl
                    `}>
                        <div className = {`
                            h-full
                            aspect-square 
                            border-2 rounded-3xl 
                            flex
                            justify-center
                            items-center
                            overflow-hidden
                            relative
                        `}>
                            <Image 
                                src={ experience.thumbnail }
                                alt = { experience.employer }
                                fill
                                className = "object-contain"
                            />
                        </div>
                        <div className={`
                            w-full p-3
                            flex flex-col
                            gap-2
                        `}>
                            <p className="flex justify-start text-xl" > { String(experience.role) } </p>
                            < Markdown remarkPlugins = { [remarkGfm]}>
                                { experience.content }
                            </Markdown>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
    </main>
    );
}
