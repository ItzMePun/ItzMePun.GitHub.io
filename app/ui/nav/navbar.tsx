import Link from 'next/link';
import { NavLinks } from '@/lib/links';

const links = Object.values(NavLinks).slice(1);

export default function NavBar() {
    return (
        <nav className={`
            fixed
            flex
            bg-dark-color-2
            h-20
            w-full
            justify-between
            items-center
            pl-[4%]
            pr-[10%]
            z-50
        `}>
            {/* Logo / home */}
            <div>
                <Link
                    key={NavLinks.logo.name}
                    href={NavLinks.logo.href}
                    className="flex h-16 aspect-square"
                >
                    <img 
                        src={NavLinks.logo.icon}
                        alt={NavLinks.logo.name}
                        className='w-full h-full'
                    />
                </Link>
            </div>

            {/* Navigation Buttons */}
            <div className={`
                flex
                gap-5
            `}>
                {links.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex h-16 aspect-square"
                    >
                        <img 
                            src={link.icon} 
                            alt={link.name}
                            className='w-full h-full'
                        />
                    </Link>
                ))}
            </div>
        </nav>
    );
}
