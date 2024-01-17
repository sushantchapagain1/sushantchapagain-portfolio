import Link from 'next/link';
import React from 'react';
import { LogoDarkIcon, LogoLightIcon } from '../icons';

//later fix with context
const isDarkMode = true;

function Logo() {
  return (
    <Link href="/" className="">
      {isDarkMode ? (
        <LogoDarkIcon height={60} width={60} />
      ) : (
        <LogoLightIcon height={60} width={60} />
      )}
    </Link>
  );
}

export default Logo;
