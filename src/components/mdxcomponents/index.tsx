import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

import Alert from './Alert';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import Code from './Code';
import CodeBlock from './CodeBlock';
import List from './List';
import NextImage from './NextImage';
import Tip from './Tip';

type MDXComponents = ComponentProps<typeof MDXProvider>['components'];
const mdxComponents: MDXComponents = {
  a: Anchor,
  blockquote: BlockQuote,
  code: Code,
  li: List,
  Alert,
  CodeBlock,
  NextImage,
  Tip,
};

export default mdxComponents;

export const allowedComponents = [
  'Alert',
  'CodeBlock',
  'NextImage',
  'Tip',
  'a',
  'b',
  'br',
  'button',
  'blockquote',
  'div',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'head',
  'img',
  'input',
  'label',
  'li',
  'link',
  'ol',
  'p',
  'path',
  'script',
  'section',
  'source',
  'span',
  'sub',
  'sup',
  'svg',
  'ul',
  'video',
];
