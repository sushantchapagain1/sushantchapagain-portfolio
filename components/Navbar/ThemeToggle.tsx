import React from 'react';
import { ThemeToogleIcon } from '../icons';

function ThemeToggle() {
  return (
    <button className="hidden md:block">
      <ThemeToogleIcon height={24} width={24} className="fill-foregroundText" />
    </button>
  );
}

export default ThemeToggle;
