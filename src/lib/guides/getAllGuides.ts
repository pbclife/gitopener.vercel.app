import { getFilecontents, getPriorityWiseGuides } from '@/lib/guides';
import { GetAllGuides, TGuideFile } from '@/types/client/guides';
import path from 'path';

export const getAllGuides: GetAllGuides = async (dirPath) => {
  const targetPath = path.join(process.cwd(), dirPath);
  const priorityWiseGuides = await getPriorityWiseGuides(targetPath);

  const guides: TGuideFile[] = [];
  for (const slugArr of priorityWiseGuides) {
    const slugHref = slugArr.map((s) => s.slug).join('/');
    const slugPath = slugArr
      .map((s) => {
        return s.priority ? `${s.priority}.${s.slug}` : s.slug;
      })
      .join('/');
    const filePath = path.join(targetPath, `${slugPath}.mdx`);
    const { meta } = await getFilecontents(filePath);

    const prorityHierarchy = slugArr.map<number | null>((p) => p.priority);
    const cred: TGuideFile = {
      href: slugHref,
      filePath: `${slugPath}`,
      priority: prorityHierarchy,
      title: meta?.title || 'Title',
      tldr: meta?.tldr,
    };
    guides.push(cred);
  }
  return guides;
};
