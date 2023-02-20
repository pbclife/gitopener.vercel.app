import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const withStyledImage = () => (tree: Root) => {
  visit(tree, 'mdxJsxFlowElement', (node: any, i: any, parent: any) => {
    if (node.name === 'img') {
      const attributes = node.attributes as any;

      const src = attributes.find((attr: any) => attr.name === 'src')
        .value as string;
      if (
        src.startsWith('/images') ||
        src.startsWith('https://avatars.githubusercontent.com') ||
        src.startsWith('https://user-images.githubusercontent.com')
      ) {
        node.name = 'NextImage';
      }

      const classAttribute = {
        type: 'mdxJsxAttribute',
        name: 'className',
        value:
          'mb-16 aspect-video w-full rounded-md object-cover object-center',
      };
      node.attributes = [...node.attributes, classAttribute];

      parent.children[i] = node;
    }
  });
};

export default withStyledImage;
