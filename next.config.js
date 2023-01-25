const mdx = require('@next/mdx');
const withMdx = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = withMdx({
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/guides',
        destination: '/guides/starting-contribution/welcome',
        permanent: true,
      },
    ];
  },
});

module.exports = nextConfig;
