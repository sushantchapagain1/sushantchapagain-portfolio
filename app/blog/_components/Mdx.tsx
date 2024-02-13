import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Share from './Share';

function CustomImage(props: { alt: string; src: string }) {
  return (
    <Image
      {...props}
      alt={props.alt}
      className="my-3 rounded-md border-neutral-700"
    />
  );
}

function CustomLink(props: { href: string; children: React.ReactNode }) {
  const href = props.href;

  if (href.startsWith('#')) {
    return <Link {...props}>{props.children}</Link>;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

const components = {
  Image: CustomImage,
  a: CustomLink,
};

function Mdx({ code }: { code: string }) {
  const MdxComponent = useMDXComponent(code);

  return (
    <Fragment>
      {/* @ts-expect-error */}
      <MdxComponent components={components} />
      <Share />
    </Fragment>
  );
}

export default Mdx;
