export type SectionProps = {
    section_id?: string;
    section_className?: string;
};

export type Skill = {
    name: string;
    icon: string;
};

export type SkillsCardsProps = {
    skillsList: Skill[];
    className?: string;
};

export type ProjectProps = {
	slug: string;
	name: string;
	thumbnail: string;
	summary: string;
	pictures: string[];
	content: string;
};

export type ProjectThumbnailProps = {
    slug: string;
    project: ProjectProps | null;
    className?: string;
};
