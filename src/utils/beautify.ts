export default function beautify(str: string | undefined) {
  if (str) {
    return str.split('-').join(' ');
  }
  return ``;
}
