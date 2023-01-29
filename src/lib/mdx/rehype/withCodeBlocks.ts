import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const withCodeBlocks = () => {
  return (tree: Root) => {
    const preTree = { children: [] };

    visit(tree, 'element', (node: any, i: number, parent: any) => {
      if (node?.tagName !== 'pre') return node;
      if (node?.children && node?.children[0]?.tagName !== 'code') return node;
      const code = node.children[0];

      let fileName = undefined;
      if (code?.data?.meta) {
        fileName = code.data.meta;
      }

      const wrap = {
        type: 'mdxJsxFlowElement',
        name: 'CodeBlock',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'fileName', value: fileName ?? '' },
          {
            type: 'mdxJsxAttribute',
            name: 'toCopy',
            value: code?.children[0]?.value ?? '',
          },
        ],
        data: { _mdxExplicitJsx: true },
      } as any;
      wrap.children = [node];
      parent.children[i] = wrap;
    });
    tree.children = [...preTree.children, ...tree.children];
  };
};

export default withCodeBlocks;
