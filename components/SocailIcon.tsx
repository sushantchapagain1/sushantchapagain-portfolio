import Link from 'next/link';

function SocailIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="transition-all duration-300 hover:-translate-y-1"
    >
      <Icon className="h-6 w-6 flex-none fill-lightText transition" />
    </Link>
  );
}

export default SocailIcon;
