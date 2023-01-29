import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import withAllowedComponents from './rehype/withAllowedComponents';
import withCodeBlocks from './rehype/withCodeBlocks';
import withNextLinks from './remark/withNextLinks';

// Get contents from slug
export const getMdxContent = async (content: string) => {
  const mdxSouce = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, withNextLinks],
      rehypePlugins: [
        withAllowedComponents,
        withCodeBlocks,
        rehypePrism,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: `wrap` }],
      ],
    },
  });
  return mdxSouce;
};
