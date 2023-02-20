import type { MDXComponents } from '@/types/client/mdxComponents';

import {
  Introduction,
  Project,
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
import Tab from './Tab';
import Tabs from './Tabs';
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
  Projects,
  Project,
  Tabs,
  Tab,
  Tip,
  Twitter,
  Skill,
  Skills,
  Introduction,
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
  'Tabs',
  'Tab',
  'Tip',
  'Twitter',
  'Skill',
  'Skills',
  'Introduction',
  'Project',
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
