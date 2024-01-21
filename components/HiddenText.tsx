import { useEffect } from 'react';

function BackgroundText({ text }: { text: string }) {
  useEffect(() => {}, []);

  return (
    <h2 className="pointer-events-none absolute bottom-0 top-0 h-fit bg-red-500 text-8xl font-extrabold">
      {text}
    </h2>
  );
}

export default BackgroundText;
