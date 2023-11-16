import { readdirSync } from "fs";
import { join, basename, extname } from "path";

export function getAllPostsInfo() {
    const postDir = join(process.cwd(), "post");
    const postFilePath = readdirSync(postDir);
    const postInfo = postFilePath.map((path) => ({
        slug: basename(path, extname(path)),
        importName: basename(path),
    }));
    return postInfo;
}
