export const findNextElementIndx = (
  children: any[],
  currIndx: number,
  element: string
): number => {
  for (let i = currIndx; i < children.length; i++) {
    if (children[i].tagName === element) return i;
  }
  return -1;
};
