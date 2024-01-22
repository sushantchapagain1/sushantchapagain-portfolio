import { cn } from '@/lib/utils';

type Props = {
  isMenuOpen: boolean;
  onToggleHamburger: () => void;
};

function Hamburger({ isMenuOpen, onToggleHamburger }: Props) {
  return (
    <div className="z-50 flex flex-col md:hidden" onClick={onToggleHamburger}>
      <span
        className={cn(
          'h-[1.5px] w-7 rounded bg-foregroundText transition-all duration-300',
          isMenuOpen && 'w-7 rotate-45',
        )}
      ></span>
      <span
        className={cn(
          'mt-2 h-[1.5px] w-5 rounded bg-foregroundText transition-all duration-300',
          isMenuOpen && 'mt-0 w-7 -rotate-45',
        )}
      ></span>
    </div>
  );
}

export default Hamburger;
