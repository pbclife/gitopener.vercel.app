import type { MDXProvider } from '@mdx-js/react';
import type { ComponentProps } from 'react';

export declare type MDXComponents = ComponentProps<
  typeof MDXProvider
>['components'];
