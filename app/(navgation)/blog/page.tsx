import { getAllPostsInfo } from "@/app/lib/utils";
import { Code } from "bright";
import Link from "next/link";

const postsInfo = getAllPostsInfo();

export default function Post() {
    return (
        <article className={"prose w-full m-auto"}>
            <div>POSTS</div>
            <ul>
                {postsInfo.map((info) => {
                    return (
                        <li key={info.slug}>
                            <Link href={`/blog/${info.slug}`}>{info.slug}</Link>
                        </li>
                    );
                })}
            </ul>
            <Code lang={"json"}>{JSON.stringify(postsInfo, null, 4)}</Code>
        </article>
    );
}
