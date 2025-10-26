/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a static site to ./out (perfect for GitHub Pages)
  output: "export",

  // Use normal <img> tags or set this if you use next/image
  images: { unoptimized: true }
};

module.exports = nextConfig;
