import { socialLinks } from '@/data/links';
import SocailIcon from './SocailIcon';

function Main() {
  return (
    <main className="my-12 p-3 sm:mt-20">
      <h1 className="stroke-name mt-3 w-fit text-2xl font-bold text-transparent sm:text-4xl md:mt-12 md:text-6xl">
        I&apos;m Sushant Chapagain
      </h1>

      <div className="font-light text-foregroundText">
        <p className="mt-6">
          a software developer who specializes in developing scalable,
          accessible, and responsive web applications with user interfaces using
          JavaScript. Additionally, I have some experience in building mobile
          applications.
        </p>
        <p className="mb-4 mt-4">
          For 1 year and a few months, I&apos;ve worked to build a Hospital
          Management Systems, Content Management Systems, and various
          interactive user interfaces in companies.
        </p>

        <div className="mb-4">
          If you would like to collab, you can send me a
          <a
            href="mailto:sreddevil12@gmail.com"
            className="mx-2 border-b-[1px] border-foregroundText pb-1 font-medium"
          >
            mail
          </a>
          or you can contact me through my social media handles.
          <ul className="mt-6 flex gap-3">
            {socialLinks.map((socialLink) => (
              <li key={socialLink.href}>
                <SocailIcon {...socialLink} aria-label={socialLink.name} />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-9">
          <a
            href="https://docs.google.com/document/d/1NV0piV6K0yEAlNC7ASaBfMGQ0L7Qdfmu7JghaOdNe04/edit#heading=h.icq2uxfcutbb"
            target="_blank"
            className="border-b-[1px] border-foregroundText py-2 font-medium"
          >
            View Resume
          </a>
        </div>
      </div>
    </main>
  );
}

export default Main;
