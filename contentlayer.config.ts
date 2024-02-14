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
    resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''), // regex to remove backslash and frontslash
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
  },
};

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.md`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    image: { type: 'string', required: false },
    description: { type: 'string', required: true },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'content/',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        //@ts-expect-error
        rehypePrettyCode,
        {
          theme: 'material-theme-darker',
          keepBackground: false,

          onVisitLine(node: LineElement) {
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(node: LineElement) {
            node.properties.className?.push('line--highlighted');
          },
          onVisitHighlightedChars(node: CharsElement) {
            node.properties.className = ['char--highlighted'];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to sub heading',
          },
        },
      ],
    ],
  },
});
