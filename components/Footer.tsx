import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="flex flex-col justify-between  gap-3 text-center text-gray-400 md:flex-row">
      <span>&copy; {currentYear} Sushant Chapagain. All rights reserved.</span>
      <span>Site designed and coded with ❤️‍🔥</span>
    </footer>
  );
}

export default Footer;
