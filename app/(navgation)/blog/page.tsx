import { getPosts } from "@/app/api/getPosts";
import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
export default function Post() {
    const posts = getPosts();
    return (
        <article className={"prose w-full m-auto"}>
            <div>POSTS</div>
            <div>{JSON.stringify(posts)}</div>
        </article>
    );
}
