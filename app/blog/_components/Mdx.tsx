import React, { Fragment } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';

function ImageMdx(props: { alt: string; src: string }) {
  return <Image {...props} alt={props.alt} className="my-3 rounded-md" />;
}

const components = {
  Image: ImageMdx,
};

function Mdx({ code }: { code: string }) {
  const MdxComponent = useMDXComponent(code);

  return (
    <div className="text-foregroundText">
      <MdxComponent components={components} />
    </div>
  );
}

export default Mdx;
