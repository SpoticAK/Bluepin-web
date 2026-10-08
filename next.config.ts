import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure the full public/ dir is traced into the standalone output.
  // Without this, a server-side fs.readFile of a single public/ file makes
  // NFT pre-create a partial .next/standalone/public/, which makes Firebase
  // App Hosting's adapter skip copying the rest of public/ -> 404s in prod.
  outputFileTracingIncludes: {
    "/*": ["./public/**/*"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
