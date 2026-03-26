'use client';

import EducationButton from "@/app/ui/landing_page/experience-section/education-button";

export default function ExperienceHeader() {
	return (
		<div className="flex flex-col md:flex-row justify-between items-baseline">
			<div className="flex justify-between items-baseline w-full">
				<header className="text-3xl">
					<h1>My Recent Experience</h1>
				</header>
				<div className="hidden md:flex">
					<p>and</p>
				</div>
			</div>
			<div className="pl-1 flex gap-1">
				<p className='flex md:hidden'>and</p>
				<EducationButton />
			</div>
		</div>
	);
}
