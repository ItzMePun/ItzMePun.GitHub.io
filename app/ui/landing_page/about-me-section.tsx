import MyProfile from '@/lib/profile';
import Link from 'next/link';
import { ProfileLinks } from '@/lib/links';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { SectionProps } from '@/lib/props';


export default async function AboutMeSection({section_id, section_className}: SectionProps) {
    const profile = await MyProfile();
    return (
        <section id={section_id} className={`
            bg-light-color-2
            w-full 
            flex flex-col
            justify-around 
            px-25 py-10
            pt-30
            gap-15 md:gap-5
            ${section_className}
        `}>
            <div className={`
                flex
                justify-between
                w-fit
                flex-col md:flex-row
                items-center
                gap-5 md:gap-0
            `}>
                {/* Who am i? */}
                <header className={`
                    w-full md:w-[55%]
                    flex flex-col
                    gap-5
                    p-5
                `}>
                    <h1 className="text-5xl">About me</h1>
                    <p>{profile.about}</p>
                </header>
                
                {/* Link to resume */}
                <div className={`
                    flex
                    w-[80%] md:w-[30%]
                    items-center
                    justify-center
                `}>
                    <Link
                        key='Resume'
                        href={profile.resume}
                        target="_blank"
                        className={`
                            w-[60%]
                            aspect-[8.5/11.7]
                            bg-amber-50
                            rotate-12
                            shadow-[20px_18px_0px_rgba(0,0,0,0.3)]

                            flex flex-col
                            items-center
                            pt-[20%]
                        `}
                    >
                        <p className="text-center">My<br/>Resume</p>
                    </Link>
                </div>
            </div>
            <div className={`
                flex
                justfify-start
                items-center
                gap-5
                pl-[5%]
            `}>
                <p>less professional things about me</p>
                <ArrowRightIcon className='w-10 rotate'/>
                <Link
                    key={ProfileLinks.personal.name}
                    href={ProfileLinks.personal.href}
                >
                    <img 
                        src={ProfileLinks.personal.icon}
                        alt={ProfileLinks.personal.name}
                        className='w-15 aspect-square rotate-10'
                    />
                </Link>
            </div>
        </section>
    );
}
