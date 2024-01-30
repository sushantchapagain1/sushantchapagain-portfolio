import React from 'react';

function Head() {
  return (
    <>
      <link
        rel="shortcut icon"
        href="/static/favicons/favicon.ico"
        type="image/x-icon"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/favicon-32x32.png"
      />

      <link
        rel="apple-touch-icon"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
    </>
  );
}

export default Head;
