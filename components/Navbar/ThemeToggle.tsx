import React from 'react';
import { SunIcon } from '../icons';

function ThemeToggle() {
  return (
    <button className="hidden md:block">
      <SunIcon height={24} width={24} className="cursor-pointer" />
    </button>
  );
}

export default ThemeToggle;
