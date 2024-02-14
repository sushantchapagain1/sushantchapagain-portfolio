'use client';

import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

function Share({ pathName }: { pathName: string }) {
  const PUBLIC_URL = typeof window !== 'undefined' && window.location.origin;

  // Doesnot work in dev mode beacuse of http only share url only works on https
  const shareUrl = `${PUBLIC_URL}${pathName}`;

  return (
    <div className="my-9 flex flex-col items-center justify-between rounded-md bg-cardBackground p-3 md:flex-row">
      <p>If you liked it share it with your friends or colleague</p>
      <div className="flex gap-6 self-center pb-6 md:pb-0">
        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon size={30} round />
        </LinkedinShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default Share;
