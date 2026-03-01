import { SectionProps } from "@/lib/props";

export default function VolleyballSection({section_id, section_className}: SectionProps) {
    return (
        <section id={`${section_id}`} className={`
            ${section_className}
            bg-light-color-1
            h-fit
            py-10 px-5
            md:py-10 md:px-20
            flex flex-col
            gap-10
        `}>
            <div className="">
                <h1 className="text-5xl font-extrabold">Volleyball</h1>
            </div>

            <div className="
                flex
                justify-between
                gap-10
            ">
                <div className="
                    w-full h-full
                    drop-shadow-2xl
                ">
                    <img src="/personal/volleyball/nottsGP.jpg"
                    className="w-full h-full"/>
                </div>
                <div className="
                    w-full
                    pt-15
                ">
                    <p>
                        Volleyball has been a very important part of me as it has connected me to most of my closest friends.
                        I first started playing in highschool and have continued to play for my university team. 
                        I also play in a 'club' team, joining ameture tournaments with friends. write more
                    </p>
                </div>
            </div>
            
            <div className="
                flex
                justify-between
                gap-10
            ">
                <div className="
                    w-full
                ">
                    <p>
                        Volleyball is a team sport and through it I have learned to be both a communicator and a leader.
                        
                        While on the surface, it may seem like a simple game but the more you progress the more you realize
                        the analytical skills to play and I feel it has really helped me think on my feet which has applied
                        to other parts of my life. While the goals may be more clear, creative solutions may appear at any
                        moment and you must learn to capitalize as soon as you can.

                    </p>
                </div>
                <div className="
                    w-full h-full
                    drop-shadow-2xl
                    flex flex-row gap-2
                    overflow-hidden
                ">
                    <div className='
                        aspect-square
                        drop-shadow-lg
                        overflow-hidden
                    '>
                        <img src="/personal/volleyball/spike.jpg"
                        className="
                            w-full h-full
                            object-cover object-bottom
                        "/>
                    </div>
                    <div className='
                        aspect-square
                        drop-shadow-lg
                        overflow-hidden
                    '>
                        <img src="/personal/volleyball/fobisia.jpeg"
                        className="
                            w-full h-full
                            object-cover object-center
                        "/>
                    </div>
                </div>
            </div>
        </section>
    )
}