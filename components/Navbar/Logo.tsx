import Link from 'next/link';
import React from 'react';
import { LogoIcon } from '../icons';

function Logo() {
  return (
    <Link href="/">
      <LogoIcon
        height={50}
        width={50}
        className="fill-foregroundText"
        color="text-foregroundText"
      />
    </Link>
  );
}

export default Logo;
