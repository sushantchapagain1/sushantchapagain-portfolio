import Link from 'next/link';
import React from 'react';
import { LogoIcon } from '../icons';

function Logo() {
  return (
    <Link href="/">
      <LogoIcon height={60} width={60} color="white" />
    </Link>
  );
}

export default Logo;
