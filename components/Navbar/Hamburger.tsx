'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggleHamburger() {
    setIsOpen((open) => !open);
  }

  return (
    <div
      className="flex flex-col gap-2 md:hidden"
      onClick={handleToggleHamburger}
    >
      <span
        className={cn(
          'bg-foregroundText h-[1.5px] w-7 rounded transition-all duration-300',
          isOpen ? 'w-7 rotate-45' : '',
        )}
      ></span>
      <span
        className={cn(
          'bg-foregroundText h-[1.5px] w-5 rounded transition-all duration-300',
          isOpen ? 'w-7 -rotate-45' : '',
        )}
      ></span>
    </div>
  );
}

export default Hamburger;
