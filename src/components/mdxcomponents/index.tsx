import type { MDXComponents } from '@/types/client/mdxComponents';

import {
  Introduction,
  Projects,
  Skill,
  Skills,
  Socials,
} from '@/components/contributorProfilePage';
import BlockQuote from './BlockQuote';
import Code from './Code';
import CodeBlock from './CodeBlock';
import ResponsiveImg from './ResponsiveImage';

const mdxComponents: MDXComponents = {
  blockquote: BlockQuote,
  code: Code,
  ResponsiveImg,
  CodeBlock,
  Skill,
  Skills,
  Introduction,
  Projects,
  Socials,
};

export default mdxComponents;

export const allowedComponents = [
  'CodeBlock',
  'ResponsiveImage',
  'Skill',
  'Skills',
  'Introduction',
  'Projects',
  'Socials',
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
