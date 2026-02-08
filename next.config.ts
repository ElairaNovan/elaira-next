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
      // https://elairanovan.com/*  ->  https://www.elairanovan.com/*
      {
        source: "/:path*",
        has: [{ type: "host", value: "elairanovan.com" }],
        destination: "https://www.elairanovan.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
