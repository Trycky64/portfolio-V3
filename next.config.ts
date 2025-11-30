import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Keep experimental empty for now to avoid TypeScript mismatch with turbopack
  experimental: {},
};

export default nextConfig;
