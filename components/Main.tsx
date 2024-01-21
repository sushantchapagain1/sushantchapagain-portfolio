import { socialLinks } from '@/data/links';
import Link from 'next/link';
import SocailIcon from './SocailIcon';
import BlogCard from '@/app/blogs/_components/BlogCard';

function Main() {
  return (
    <main className="mt-12 p-3 sm:mt-20 md:mt-12">
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
        <div className="mb-4 mt-4">
          For 1 year and a few months, I&apos;ve worked on Bytefaucet technology
          <Link
            href="https://www.bytefaucet.com/"
            target="_blank"
            className="border-forgroundText ml-2 border-b pb-1 font-medium"
          >
            Bytefaucet technology&nbsp;
          </Link>
          to build a Hospital Management Systems, Content Management Systems,
          and various interactive user interfaces.
        </div>

        <div className="mb-4">
          If you would like to collab, you can send me a
          <Link
            href="mailto:sreddevil12@gmail.com"
            className="border-forgroundText mx-2 border-b pb-1 font-medium"
          >
            mail
          </Link>
          or you can contact me through my social media handles.
          <div className="mt-6 flex gap-6">
            {socialLinks.map((socialLink) => (
              <SocailIcon key={socialLink.href} {...socialLink} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
