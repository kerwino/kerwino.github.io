import nextMdx from "@next/mdx";

/** @type {import('next').NextConfig} */
let nextConfig = {
    // Configure `pageExtensions` to include MDX files
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    // Optionally, add any other Next.js config below
    transpilePackages: ["lucide-react"],
    experimental: {
        webpackBuildWorker: true,
    },
};

if (process.env.GITHUB_ACTIONS) {
    let isPersonalPage = false;
    const [user, repo] = process.env.GITHUB_REPOSITORY.split("/");
    if (repo === `${user}.github.io`) {
        isPersonalPage = true;
    }
    /** @type {import('next').NextConfig} */
    nextConfig = {
        ...nextConfig,
        output: "export",
        images: {
            unoptimized: true,
        },
        basePath: isPersonalPage ? "" : repo,
    };
}

const withMdx = nextMdx({
    extension: /\.mdx?$/,
    options: {},
});

nextConfig = withMdx(nextConfig);

export default nextConfig;
