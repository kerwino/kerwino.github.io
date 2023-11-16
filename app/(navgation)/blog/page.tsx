import { getAllPostsInfo } from "@/app/lib/utils";
import Link from "next/link";

const postsInfo = getAllPostsInfo();

export default function Post() {
    return (
        <article className={"prose w-full m-auto"}>
            <div>POSTS</div>

            <div>All Post Module Path</div>

            <pre>{JSON.stringify(postsInfo, null, 4)}</pre>

            <ul>
                {postsInfo.map((info) => {
                    return (
                        <li key={info.slug}>
                            <Link href={`/blog/${info.slug}`}>{info.slug}</Link>
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
