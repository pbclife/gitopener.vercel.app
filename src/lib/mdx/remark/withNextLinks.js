import Link from 'next/link';
import { visit } from 'unist-util-visit';

const withNextLinks = () => (tree) => {
  visit(tree, 'link', (node) => {
    const data = node?.data || (node.data = {});
    const props = data.hProperties || (data.hProperties = {});
    const url = node.url;

    if (url.startsWith('/') || url.includes('gitopener.vercel.app')) {
      const newLinkNode = [
        { type: 'jsx', value: `<${Link} href="${url}" passHref>` },
        ...node.children,
        { type: 'jsx', value: `</${Link}>` },
      ];
      return newLinkNode;
    } else {
      props.target = '_blank';
      props.rel = 'noreferrer';
      return;
    }
  });
};

export default withNextLinks;
