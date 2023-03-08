import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const withStyledLi = () => (tree: Root) => {
  visit(tree, 'element', (node: any) => {
    if (node.tagName === 'li') {
      const props = node.properties;
      const className =
        'text-skin-muted marker:text-accent before:bg-accent prose-code:text-skin-base';
      props.className = className;
    }
  });
};

export default withStyledLi;
