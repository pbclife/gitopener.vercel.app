import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';
import { findNextElementIndx } from './utils';

const withHobbyLi = () => (tree: Root) => {
  visit(tree, 'element', (node: any, i: any, parent: any) => {
    if (node.tagName === 'h2' && node.children[0].value === 'Hobbies') {
      const nextUlIndx = findNextElementIndx(parent.children, i, 'ul');
      if (nextUlIndx === -1) return;
      const nextUlNode = parent.children[nextUlIndx];
      visit(nextUlNode, 'element', (node: any) => {
        if (node.tagName === 'ul') {
          const props = node.properties;
          const className =
            'flex items-center gap-4 text-skin-inverted flex-wrap max-w-xl';
          props.className = className;
        }
        if (node.tagName === 'li') {
          const props = node.properties;
          const className =
            'bg-skin-inverted py-1 rounded-full px-4 text-lg font-semibold before:hidden my-0';
          props.className = className;
        }
      });
    }
  });
};

export default withHobbyLi;
