import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="text-foregroundText flex flex-col justify-between gap-3 text-center font-light md:flex-row">
      <span>&copy; {currentYear} Sushant Chapagain. All rights reserved.</span>
      <span>Site designed and coded with ❤️‍🔥</span>
    </footer>
  );
}

export default Footer;
