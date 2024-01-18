import Link from 'next/link';

function SocailIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <Link href={href} target="_blank">
      <Icon className="fill-lightText h-6 w-6 flex-none transition" />
    </Link>
  );
}

export default SocailIcon;
