import { getAllPostsInfo } from "@/app/lib/utils";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Suspense } from "react";

const posts = getAllPostsInfo();
export default function Page({ params }: { params: { slug: string } }) {
    const postInfo = posts.find((post) => post.slug === params.slug);
    if (!postInfo) {
        notFound();
    }

    const PostComponent = dynamic(
        () => import(`@/post/${postInfo.importName}`),
    );

    return (
        <article className={"prose w-full m-auto"}>
            <Suspense fallback={<h1>Loading...</h1>}>
                <PostComponent />
            </Suspense>
        </article>
    );
}

export async function generateStaticParams() {
    return posts.map((post) => ({
        slug: post.slug,
    }));
}
