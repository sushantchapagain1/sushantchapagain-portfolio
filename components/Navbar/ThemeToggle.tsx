'use client';
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
        'hidden md:block',
        isMenuOpen && 'absolute z-[99] block md:relative',
      )}
      onClick={toggleDarkMode}
    >
      <ThemeToogleIcon height={24} width={24} className="fill-foregroundText" />
    </button>
  );
}

export default ThemeToggle;
