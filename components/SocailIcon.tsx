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
      <Icon className="h-6 w-6 flex-none fill-gray-500 transition hover:fill-gray-200 " />
    </Link>
  );
}

export default SocailIcon;
