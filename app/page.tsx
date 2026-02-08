
import { mono } from '@/app/ui/fonts';

import LandingPageHeroSection from "@/app/ui/landing_page/landing-page-hero-section";
import AboutMeSection from "@/app/ui/landing_page/about-me-section";
import ExperienceSection from "@/app/ui/landing_page/experience-section";
import FeaturedProjectsSection from '@/app/ui/landing_page/featured-projects-section';
import SkillsSection from '@/app/ui/landing_page/skills-section';
import ContactMeSection from '@/app/ui/landing_page/contact-me-section';

export default async function Page() {
	return (
	<main className={`${mono.className} max-w-screen no-scrollbar`}>
		<LandingPageHeroSection section_id='hero'/>
		<AboutMeSection section_className='about-me'/>
		<ExperienceSection section_id='experience'/>
		<FeaturedProjectsSection section_id="featured-projects"/>
		<SkillsSection section_id='skills'/>
		<ContactMeSection section_id="contact"/>
	</main>
	);
}
