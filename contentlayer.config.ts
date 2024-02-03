import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode, {
  LineElement,
  CharsElement,
} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

const computedFields: ComputedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
  },

  // we can pass any property name here with some calculations.
  // slugAsParam: {
  //   type: 'string',
  //   resolve: (doc) =>
  //     `/${doc._raw.flattenedPath.split('/').slice(1).join('/')}`,
  // },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    minuteRead: { type: 'number', required: true },
    image: { type: 'string', required: false },
    description: { type: 'string', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content/',
  documentTypes: [Blog],
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        //@ts-expect-error
        rehypePrettyCode,
        {
          theme: 'github-dark',
          onVisitLine(node: LineElement) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push('line--highlighted');
          },
          onVisitHighlightedWord(node: CharsElement) {
            node.properties.className = ['word--highlighted'];
          },
        },
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['subheading-anchor'],
              ariaLabel: 'Link to section',
            },
          },
        ],
      ],
    ],
    remarkPlugins: [remarkGfm],
  },
});
