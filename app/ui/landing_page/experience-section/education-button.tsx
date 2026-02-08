'use client';

import { useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

type EducationButtonProps = {
  onOpenChange?: (open: boolean) => void;
};

function EducationButtonBody({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange?: (open: boolean) => void;
}) {
	useEffect(() => {
		onOpenChange?.(open);
	}, [open, onOpenChange]);
	
	const educationCardClassNames = `
		w-full
		flex flex-col 
		border p-3 
		rounded-lg 
		bg-gray-200
	`;

  return (
    <>
      <DisclosureButton
        className="inline-flex items-center gap-2 cursor-pointer select-none justify-end"
        aria-label="Toggle education"
      >
        <span>Education</span>
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </DisclosureButton>

      <DisclosurePanel className="mt-4 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* High school */}
          <div className={educationCardClassNames}>
            <h1>
              <span>High school: </span>
              <span>Bangkok Prep</span>
            </h1>
            <div>
              <h2>A Levels:</h2>
              <ul className="px-2 rounded">
                <li>Maths: A*</li>
                <li>Physics: A</li>
                <li>Computer Science: A</li>
              </ul>
            </div>
            <div>
              <h2>IGCSEs:</h2>
              <p>6 A* (or equivalent)</p>
            </div>
          </div>

          {/* SAT + IELTS */}
          <div className={educationCardClassNames}>
            <p>
              <span>SAT: </span>
              <span>1480</span>
            </p>
            <p>
              <span>IELTS: </span>
              <span>8.5</span>
            </p>
          </div>

          {/* Uni */}
          <div className={educationCardClassNames}>
            <h1>University of Nottingham</h1>
            <p>Electronic and Computer Engineering</p>
          </div>
        </div>
      </DisclosurePanel>
    </>
  );
}

export default function EducationButton({ onOpenChange }: EducationButtonProps) {
  return (
    <Disclosure as="div" className="w-full">
      {({ open }) => (
        <EducationButtonBody open={open} onOpenChange={onOpenChange} />
      )}
    </Disclosure>
  );
}