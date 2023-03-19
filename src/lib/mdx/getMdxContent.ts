import type { PluggableList } from 'unified';

import { serialize } from 'next-mdx-remote/serialize';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import withAllowedComponents from './rehype/withAllowedComponents';
import withCodeBlocks from './rehype/withCodeBlocks';
import withNextImage from './rehype/withNextImage';
import withStyledImage from './rehype/withStyledImg';
import withNextLinks from './remark/withNextLinks';

// Get contents from slug
export const getMdxContent = async (
  content: string,
  ...rehypePlugins: PluggableList
) => {
  const mdxSouce = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, withNextLinks],
      rehypePlugins: [
        withAllowedComponents,
        withCodeBlocks,
        withNextImage,
        withStyledImage,
        rehypePrism,
        rehypeSlug,
        ...rehypePlugins,
        [rehypeAutolinkHeadings, { behavior: `wrap`, test: ['h1', 'h2'] }],
      ],
    },
  });
  return mdxSouce;
};
