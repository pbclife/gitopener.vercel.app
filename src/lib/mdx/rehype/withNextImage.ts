import type { Root } from 'mdast';
import { visit } from 'unist-util-visit';

const withNextImage = () => (tree: Root) => {
  visit(tree, 'element', (node: any, i: any, parent: any) => {
    if (node.tagName === 'img') {
      const props = node.properties;
      // console.log(props);
      if (
        props.src.startsWith('https://avatars.githubusercontent.com') ||
        props.src.startsWith('https://user-images.githubusercontent.com')
      ) {
        const nextImgComp = {
          type: 'mdxJsxFlowElement',
          name: 'NextImage',
          attributes: [
            { type: 'mdxJsxAttribute', name: 'src', value: `${props.src}` },
            {
              type: 'mdxJsxAttribute',
              name: 'alt',
              value: `${props.alt}`,
            },
          ],
          data: { _mdxExplicitJsx: true },
        } as any;
        nextImgComp.children = [node];
        parent.children[i] = nextImgComp;
      } else {
        props.className =
          'mb-16 aspect-video w-full rounded-md object-cover object-center';
        node.properties = props;
        parent.children[i] = node;
      }
    }
  });
  tree.children = [...tree.children];
};
export default withNextImage;
