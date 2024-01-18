import Link from 'next/link';

function Main() {
  return (
    <main className="p-10 md:p-20">
      <h1 className=" stroke-name mt-3 w-full text-3xl font-bold text-transparent md:mt-12 md:text-6xl">
        I&apos;m Sushant Chapagain
      </h1>

      <div className=" text-gray-300">
        <p className="mt-6 ">
          a software developer who specializes in developing scalable,
          accessible, and responsive web applications with user interfaces using
          JavaScript. Additionally, I have some experience in building mobile
          applications.
        </p>
        <div className="mb-4 mt-4">
          For 1 year and a few months, I&apos;ve worked on Bytefaucet technology
          <Link
            href="https://www.bytefaucet.com/"
            target="_blank"
            className="ml-2 border-b pb-1 font-bold"
          >
            Bytefaucet technology&nbsp;
          </Link>
          to build a Hospital Management Systems, Content Management Systems,
          and various interactive user interfaces.
        </div>

        <div className="mb-4">
          If you would like to collab, you can dm me
          <Link href="/contact" className="mx-2 border-b pb-1">
            here
          </Link>
          or you can contact me through my social media handles.
          <div className="mt-3 flex gap-3"></div>
        </div>
      </div>
    </main>
  );
}

export default Main;