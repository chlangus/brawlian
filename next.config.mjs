/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://3.84.133.48/:path*",
      },
    ];
  },
};

export default nextConfig;
