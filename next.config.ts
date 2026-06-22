import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  // @react-pdf/renderer is a heavy server-only package — load it from
  // node_modules at runtime instead of bundling it.
  serverExternalPackages: ["@react-pdf/renderer"],
};

export default nextConfig;
