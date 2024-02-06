import React, { Fragment } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

function ImageMdx(props: { alt: string; src: string }) {
  return <Image {...props} alt={props.alt} className="rounded-md" />;
}

function RowHorizontal({ children }: { children: React.ReactNode }) {
  return <div className="mt-3 flex gap-9">{children}</div>;
}

const components = {
  // All components that we pass only can be used in mdx
  Image: ImageMdx,
  RowHorizontal,
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
