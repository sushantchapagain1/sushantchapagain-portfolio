import React, { Fragment } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

function ImageMdx(props: { alt: string; src: string }) {
  return (
    <Image
      {...props}
      alt={props.alt}
      className="my-3 rounded-md border-neutral-700"
    />
  );
}

const components = {
  Image: ImageMdx,
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
