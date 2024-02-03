import React, { Fragment } from 'react';
import { useMDXComponent } from 'next-contentlayer/hooks';

function Rest({ children }: { children: React.ReactNode }) {
  return <Fragment>{children}</Fragment>;
}

const components = {
  Rest,
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
