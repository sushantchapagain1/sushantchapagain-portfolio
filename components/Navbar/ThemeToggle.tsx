import React from 'react';
import { SunIcon } from '../icons';

function ThemeToggle() {
  return (
    <div className="hidden md:block">
      <SunIcon height={24} width={24} className="cursor-pointer" />
    </div>
  );
}

export default ThemeToggle;
