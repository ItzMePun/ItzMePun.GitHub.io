'use client';

import { useState } from 'react';
import EducationButton from "@/app/ui/landing_page/experience-section/education-button";
import clsx from 'clsx';

export default function ExperienceHeader() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div
			className={clsx(`
			flex flex-col md:flex-row
			justify-between items-baseline
			`,
				{ 'flex-col': isOpen }
			)}
		>
			<div className="flex justify-between items-baseline w-full">
				<header className="text-3xl">
					<h1>My Recent Experience</h1>
				</header>
				<div className="flex">
					<p>and</p>
				</div>
			</div>
			<div className="pl-1">
				<EducationButton onOpenChange={setIsOpen} />
			</div>
		</div>
	);
}
