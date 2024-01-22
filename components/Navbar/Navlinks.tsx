'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { navlinks } from '../../data/links';
import Hamburger from './Hamburger';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Navlinks() {
  const pathName = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((open) => !open);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <>
      <nav
        className={cn(
          isMenuOpen &&
            'bg-navigationBg absolute left-0 top-0 z-10 h-screen w-full md:relative md:h-auto md:bg-transparent',
        )}
      >
        <ul
          className={cn(
            'hidden gap-6 capitalize md:flex',
            isMenuOpen &&
              'flex h-full flex-col items-center justify-center md:flex-row',
          )}
        >
          {navlinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <li
                key={link.href}
                className={cn(
                  'p-1 font-light text-lightText transition hover:text-navlinks',
                  isActive && 'border-b border-lightText text-navlinks',
                )}
                onClick={closeMenu}
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* not created context cz only need to pass down the tree by one parent.*/}
      <ThemeToggle isMenuOpen={isMenuOpen} />
      <Hamburger isMenuOpen={isMenuOpen} onToggleHamburger={handleMenuToggle} />
    </>
  );
}

export default Navlinks;
