import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="mb-3 flex flex-col justify-between gap-3 text-center font-light text-foregroundText md:flex-row">
      <span>&copy; {currentYear} sushant chapagain. All rights reserved.</span>
      <span>Site designed and coded with ❤️‍🔥</span>
    </footer>
  );
}

export default Footer;
