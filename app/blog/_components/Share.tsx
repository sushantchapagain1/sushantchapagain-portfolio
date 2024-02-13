'use client';
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from 'react-share';

function Share() {
  return (
    <div className="my-9 flex flex-col items-center justify-between rounded-md bg-cardBackground p-3 md:flex-row">
      <p>If you liked it share it with your friends or colleague</p>
      <div className="flex gap-6 self-center pb-6 md:pb-0">
        <LinkedinShareButton url="https://www.linkedin.com/feed/">
          <LinkedinIcon size={30} round />
        </LinkedinShareButton>
        <TwitterShareButton url="https://twitter.com/home">
          <TwitterIcon size={30} round />
        </TwitterShareButton>
        <FacebookShareButton url="https://www.facebook.com/">
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}

export default Share;
