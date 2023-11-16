/** @type {import('next').NextConfig} */
const nextMdx = require("@next/mdx");

const withMdx = nextMdx({
    // By default only the `.mdx` extension is supported.
    extension: /\.(md|mdx)$/,
    options: {
        /* otherOptions… */
    },
});

const nextConfig = withMdx({
    // Support MDX files as pages:
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    transpilePackages: ["lucide-react"],
    output: "export",
});

module.exports = nextConfig;
