function SocailIcon({
  href,
  icon: Icon,
}: {
  href: string;
  icon: React.ElementType;
}) {
  return (
    <a href={href} target="_blank">
      <Icon className="h-6 w-6 flex-none fill-lightText transition-all duration-300 hover:-translate-y-1" />
    </a>
  );
}

export default SocailIcon;
