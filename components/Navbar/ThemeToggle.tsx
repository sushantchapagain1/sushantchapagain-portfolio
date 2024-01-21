'use client';
import React from 'react';
import { ThemeToogleIcon } from '../icons';
import { useTheme } from '@/contexts/ThemeContext';

function ThemeToggle() {
  const { toggleDarkMode } = useTheme();
  return (
    <button className="hidden md:block" onClick={toggleDarkMode}>
      <ThemeToogleIcon height={24} width={24} className="fill-foregroundText" />
    </button>
  );
}

export default ThemeToggle;
