import React from 'react';
import { ThemeToogleIcon } from '../icons';
import { useTheme } from '@/contexts/ThemeContext';
import { cn } from '@/lib/utils';

type Props = {
  isMenuOpen: boolean;
};

function ThemeToggle({ isMenuOpen }: Props) {
  const { toggleDarkMode } = useTheme();
  return (
    <button
      className={cn(
        'opacity-0 md:translate-x-0 md:opacity-100',
        isMenuOpen &&
          'absolute z-[99] translate-x-0 opacity-100 transition-all duration-[3000ms] md:relative',
      )}
      onClick={toggleDarkMode}
    >
      <ThemeToogleIcon height={24} width={24} className="fill-foregroundText" />
    </button>
  );
}

export default ThemeToggle;
