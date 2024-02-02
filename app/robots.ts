// This files tells search engines web crawlers(searches automatically on our site content and info)which page or files can or
// cannot go to request from the site. Usefull to set in admin, some API and more.

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: '/not-found' }],
    sitemap: 'sitemap/url',
    //  its like a helper for web crawlers like  Bing, Yandex, Baidu, Naver, Yahoo or DuckDuckGo) .
    // if we have 1000 pages then sitemap will force not to overlook other unneeded pages.
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap for creating a sitemap
  };
}
