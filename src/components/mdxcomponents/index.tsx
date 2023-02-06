import { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

import Alert from './Alert';
import Anchor from './Anchor';
import BlockQuote from './BlockQuote';
import Card from './Card';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Grid from './Grid';
import List from './List';
import NextImage from './NextImage';
import Tip from './Tip';

import Github from './socialCards/GithubCard';
import LinkedIn from './socialCards/LinkedInCard';
import Twitter from './socialCards/TwitterCard';

type MDXComponents = ComponentProps<typeof MDXProvider>['components'];
const mdxComponents: MDXComponents = {
  a: Anchor,
  blockquote: BlockQuote,
  code: Code,
  li: List,
  Alert,
  CodeBlock,
  Card,
  Github,
  Grid,
  LinkedIn,
  NextImage,
  Tip,
  Twitter,
};

export default mdxComponents;

export const allowedComponents = [
  'Alert',
  'CodeBlock',
  'Card',
  'Github',
  'Grid',
  'NextImage',
  'LinkedIn',
  'Tip',
  'Twitter',
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
