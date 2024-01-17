import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <div className="flex flex-col justify-between  gap-3 text-center text-gray-400 md:flex-row">
      <span>&copy; {currentYear} Sushant Chapagain. All rights reserved.</span>
      <span>Site designed and coded with ❤️‍🔥</span>
    </div>
  );
}

export default Footer;
