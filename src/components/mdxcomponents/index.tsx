import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import Code from './Code';
import CodeBlock from './CodeBlock';
import List from './List';
import ResponsiveImg from './ResponsiveImage';

type MDXComponents = ComponentProps<typeof MDXProvider>['components'];
const mdxComponents: MDXComponents = {
  a: Anchor,
  blockquote: BlockQuote,
  code: Code,
  li: List,
  ResponsiveImg,
  CodeBlock,
};

export default mdxComponents;
