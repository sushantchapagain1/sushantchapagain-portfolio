'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navlinks } from '../../data/links';

function Navlinks() {
  const pathName = usePathname();

  return (
    <nav>
      <ul className="hidden gap-6 capitalize md:flex">
        {navlinks.map((link) => {
          const isActive = pathName === link.href;
          return (
            <li
              key={link.href}
              className={cn(
                'p-1 font-light text-lightText transition hover:text-navlinks',
                isActive ? 'border-b border-lightText text-navlinks' : '',
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navlinks;
