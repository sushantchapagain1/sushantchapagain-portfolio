import Navlinks from './Navlinks';
import Logo from './Logo';

function Navbar() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <Navlinks />
    </header>
  );
}

export default Navbar;
