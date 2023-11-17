import { readFileSync, readdirSync } from "fs";
import { join, basename, extname } from "path";
import readingTime from "reading-time";

export function getAllPostsInfo() {
    const postDir = join(process.cwd(), "./data/posts");
    const postFileName = readdirSync(postDir);
    const postInfo = postFileName.map((filename) => ({
        slug: basename(filename, extname(filename)),
        importName: basename(filename),
        readingTime: readingTime(
            readFileSync(join(postDir, filename), "utf-8"),
        ),
    }));
    return postInfo;
}
