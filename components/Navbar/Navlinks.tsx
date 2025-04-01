'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navlinks } from '../../data/links';
import ThemeToggle from './ThemeToggle';

function Navlinks() {
  const pathName = usePathname();

  return (
    <nav className="flex w-full justify-between">
      <ul className="grid grid-cols-[repeat(3,4.5em)] text-center capitalize">
        {navlinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li
              key={link.href}
              className="p-1 text-sm text-lightText transition duration-200 hover:font-medium hover:text-navlinks md:text-base"
            >
              <Link
                className={cn(
                  'border-b-2 border-transparent pb-2 ',
                  isActive && 'border-navlinks font-medium text-navlinks',
                )}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navlinks;
