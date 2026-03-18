/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/blog/understanding-studding-systems-design-and-specifications", destination: "/", permanent: true },
      { source: "/blog/industrial-applications-for-studding-systems", destination: "/", permanent: true },
      { source: "/blog/standards-and-quality-assurance-in-studding-systems", destination: "/", permanent: true },
      { source: "/blog/:slug", destination: "/", permanent: true },
      { source: "/blog", destination: "/", permanent: true },
      { source: "/about", destination: "/", permanent: true },
      { source: "/contact", destination: "/", permanent: true },
      { source: "/services", destination: "/", permanent: true },
    ];
  },
};

module.exports = nextConfig;
