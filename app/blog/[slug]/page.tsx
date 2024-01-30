import React from 'react';

// TODO Blog managment using dynamic metadata.
// import type { Metadata, ResolvingMetadata } from 'next';

// type Props = {
//   params: { id: string };
//   searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent: ResolvingMetadata,
// ): Promise<Metadata> {
//   // read route params
//   const blogId = params.id;

//   // fetch data
//   const blog = await fetch(`https://.../${id}`).then((res) => res.json());

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || [];

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   };
// }

// export default function Page({ params, searchParams }: Props) {}

function page() {
  return <div className="text-foregroundText">blog detail</div>;
}

export default page;
