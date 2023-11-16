import { readdirSync } from "fs";
import path from "path";

export function getPosts() {
    const postDir = path.join(process.cwd(), "post");
    return readdirSync(postDir).map((fileName) => {
        // const file = path.basename(fileName, ".mdx");
        return `@/post/${fileName}`;
    });
}
