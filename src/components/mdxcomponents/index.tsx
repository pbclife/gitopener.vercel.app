import type { MDXComponents } from '@/types/client/mdxComponents';

import {
  Introduction,
  Projects,
  Skill,
  Skills,
  Socials,
} from '@/components/contributorProfilePage';
import Alert from './Alert';
import BlockQuote from './BlockQuote';
import Card from './Card';
import Code from './Code';
import CodeBlock from './CodeBlock';
import Grid from './Grid';
import NextImage from './NextImage';
import Tip from './Tip';

import Github from './socialCards/GithubCard';
import LinkedIn from './socialCards/LinkedInCard';
import Twitter from './socialCards/TwitterCard';

const mdxComponents: MDXComponents = {
  blockquote: BlockQuote,
  code: Code,
  Alert,
  CodeBlock,
  Card,
  Github,
  Grid,
  LinkedIn,
  NextImage,
  Tip,
  Twitter,
  Skill,
  Skills,
  Introduction,
  Projects,
  Socials,
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
