import { getAllPostModuleName } from "@/app/lib/utils";
import Link from "next/link";

const postsModuleName = getAllPostModuleName();

export default function Post() {
    return (
        <article className={"prose w-full m-auto"}>
            <div>POSTS</div>

            <div>All Post Module Path</div>

            <pre>{JSON.stringify(postsModuleName, null, 4)}</pre>

            <ul>
                {postsModuleName.map((module) => {
                    return (
                        <li key={module}>
                            <Link href={`/blog/${module}`}>{module}</Link>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
