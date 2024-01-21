'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleHamburger() {
    setIsOpen((open) => !open);
  }

  return (
    <div className="flex flex-col md:hidden" onClick={handleToggleHamburger}>
      <span
        className={cn(
          'h-[1.5px] w-7 rounded bg-foregroundText transition-all duration-300',
          isOpen ? 'w-7 rotate-45' : '',
        )}
      ></span>
      <span
        className={cn(
          'mt-2 h-[1.5px] w-5 rounded bg-foregroundText transition-all duration-300',
          isOpen ? 'mt-0 w-7 -rotate-45' : '',
        )}
      ></span>
    </div>
  );
}

export default Hamburger;
