import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="flex flex-col items-center gap-3 self-center justify-self-center">
      <p className="font-bold text-foregroundText">
        404 | The page you are looking could not be found
      </p>
      <Link
        href="/"
        className="border-b border-foregroundText text-foregroundText"
      >
        Go back to homepage
      </Link>
    </div>
  );
}

export default NotFound;
