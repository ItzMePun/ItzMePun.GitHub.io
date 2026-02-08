
import ProjectThumbnail from "@/app/ui/projects_page/project-thumbnail";
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { NavLinks } from "@/lib/links";
import Link from 'next/link';
import { SectionProps } from "@/lib/props";
import { getProjectByName } from "@/lib/projects";

export default async function FeaturedProjectsSection({section_id, section_className}: SectionProps) {
    const featured_projects_names = ["eeebot.project", "chula-ml-project.project", "trash-to-treasure.project"];
    const featured_projects = await Promise.all(
        featured_projects_names.map((projectName) => getProjectByName(projectName))
    );

    return (
        <section
            id={section_id}
            className={`
                bg-light-color-1
                w-full 
                flex flex-col
                justify-around 
                px-10 md:px-25
                py-25
                gap-15
                ${section_className}
            `}
        >
            <h1 className="text-4xl flex justify-around">Featured Projects</h1>
            <div className={`
                flex justify-between 
                flex-col md:flex-row
                gap-10 md:gap-0
                items-center
            `}>
                {featured_projects_names.map((projectName, index) => (
                    <ProjectThumbnail
                        key={projectName}
                        name={projectName}
                        project={featured_projects[index]}
                        className="w-[80%] md:w-[32.5%]"
                    />
                ))}
            </div>
            <div className={`
                flex justify-center items-center
                gap-[3%]    
            `}>
                <p>See all my projects here</p>
                <ArrowRightIcon className="h-7 aspect-square hidden sm:block"/>
                <Link
                    key={NavLinks.projects.name}
                    href={NavLinks.projects.href}
                >
                    <img 
                        src={NavLinks.projects.icon}
                        alt={NavLinks.projects.name}
                        className=""
                    />
                </Link>
            </div>
        </section>
    );
}
