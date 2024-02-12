import React, { Fragment } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Link from 'next/link';

function ImageMdx(props: { alt: string; src: string }) {
  return (
    <Image
      {...props}
      alt={props.alt}
      className="my-3 rounded-md border-neutral-700"
    />
  );
}

function LinkMdx(props: { href: string; children: React.ReactNode }) {
  const href = props.href;

  if (href.startsWith('#')) {
    return <Link {...props}>{props.children}</Link>;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const components = {
  Image: ImageMdx,
  a: LinkMdx,
};

function Mdx({ code }: { code: string }) {
  const MdxComponent = useMDXComponent(code);

  return (
    <Fragment>
      <MdxComponent components={components} />
    </Fragment>
  );
}

export default Mdx;
