import type { NextConfig } from "next";
import nextra from "nextra";
import path from "path";

const withNextra = nextra({
  contentDirBasePath: "/",
});

const nextConfig: NextConfig = {
  basePath: "/study-guide",
  images: { unoptimized: true },
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image).*)",
        headers: [{ key: "Cache-Control", value: "no-store" }],
      },
    ];
  },
  turbopack: {
    root: path.resolve(__dirname),
    resolveAlias: {
      "next-mdx-import-source-file": "./mdx-components.ts",
    },
  },
};

export default withNextra(nextConfig);
