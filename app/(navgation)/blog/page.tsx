import SearchBar from "@/components/SearchBar";
import { Suspense } from "react";
export default function Post() {
    return (
        <article className={"prose w-full m-auto"}>
            <Suspense fallback={<h1>loading...</h1>}>
                <SearchBar />
            </Suspense>

            <div>POSTS</div>
        </article>
    );
}
