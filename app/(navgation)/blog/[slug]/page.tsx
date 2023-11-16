import { getAllPostModuleName } from "@/app/lib/utils";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Suspense } from "react";
const posts = getAllPostModuleName();

export default function Page({ params }: { params: { slug: string } }) {
    if (!posts.includes(params.slug)) {
        console.log(posts, params.slug);
        notFound();
    }

    const PostComponent = dynamic(() => import(`@/post/${params.slug}.tsx`));

    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <PostComponent />
        </Suspense>
    );
}

export async function generateStaticParams() {
    const posts = getAllPostModuleName();

    return posts.map((post) => ({
        slug: post,
    }));
}
