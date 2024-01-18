import Navlinks from './Navlinks';
import Hamburger from './Hamburger';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navlinks />
      <Hamburger />
      <ThemeToggle />
    </header>
  );
}

export default Navbar;
