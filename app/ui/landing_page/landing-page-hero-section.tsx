
import { SectionProps } from "@/lib/props";

export default function LandingPageHeroSection({section_id, section_className}: SectionProps) {
    return (
        <section 
            id={section_id}
            className={`
                bg-light-color-1
                h-screen w-full 
                flex justify-around 
                px-[7%] py-7
                pt-30
                ${section_className}
        `}>

            {/* Left side - name and stuff */}
            <div className={`
                bg-amber
                text-dark-color-1
                w-full md:w-[70%]
                flex flex-col justify-center
                gap-15

            `}>
                
                {/* Name Plate */}
                <div className="text-6xl flex flex-col gap-2">
                    <h1 className="">Pun&nbsp;Phanasomburna</h1>
                    <h1 className="">ปัณณ์ พรรณสมบูรณ์</h1>
                </div>

                {/* Others */}
                <div className="text-2xl">
                    
                    {/* Learn more */}
                    <div className="pl-10 -rotate-3">
                        <p className="border bg-contrast-color w-fit px-3 py-2 rounded-lg">Learn more about me</p>
                    </div>

                    {/* Or projects */}
                    <div className="flex justify-end items-center rotate-[5deg] gap-4 pr-10">
                        <p>or my</p>
                        <div className="bg-contrast-color p-2 rounded-md">
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Profile image */}
            <div className="bg-amber hidden md:block">
                {/* red square */}
                <div className={`
                    w-40
                    h-40
                    bg-contrast-color
                    justify-self-end
                `} />

                {/* green circle */}
                <div className={`
                    w-15
                    h-15
                    bg-dark-color-1
                    rounded-full
                `} />

                {/* image circle */}
                <div className={`
                    w-60
                    h-60
                    rounded-full
                    bg-white/35
                    border
                    border-black/10
                    overflow-hidden
                `}>
                {/* Image */}
                {/* <img src="/me.jpg" alt="Pun" className="h-full w-full object-cover" /> */}
                </div>
            </div>
        </section>
    );
}
