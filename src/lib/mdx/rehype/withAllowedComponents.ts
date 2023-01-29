import type { Root } from 'mdast';
import type { MdxJsxFlowElement } from 'mdast-util-mdx-jsx';
import type { Node } from 'unist';
import { map } from 'unist-util-map';

import { allowedComponents } from '@/components/mdxcomponents';

const withAllowedComponents = () => {
  return (tree: Root) => {
    const newTree = map(tree, (node: Node) => {
      if (node.type === 'mdxJsxFlowElement') {
        const mdxJsxFlowElement = node as MdxJsxFlowElement;
        if (
          mdxJsxFlowElement.name &&
          !allowedComponents.includes(mdxJsxFlowElement.name)
        ) {
          const comment = ` Component ${mdxJsxFlowElement.name} does not exist. `;
          return {
            type: 'mdxFlowExpression',
            value: `/* ${comment} */`,
            data: {
              estree: {
                type: 'Program',
                body: [],
                comments: [
                  {
                    type: 'Block',
                    value: comment,
                  },
                ],
                sourceType: 'module',
              },
            },
          };
        }
      }
      return node;
    });
    return newTree;
  };
};

export default withAllowedComponents;
