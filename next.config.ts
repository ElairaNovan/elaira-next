import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  turbopack: {
    rules: {
      "*.mdx": {
        loaders: ["@mdx-js/loader"],
        as: "*.js",
      },
    },
  },

  async redirects() {
    return [
      // redirect without www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "elairanovan.com" }],
        destination: "https://www.elairanovan.com/:path*",
        permanent: true,
      },

      // OLD slug → NEW slug
      {
        source: "/research/aesthetics",
        destination: "/future-aesthetics",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

