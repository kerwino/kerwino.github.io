import { readdirSync } from "fs";
import { join, basename, extname } from "path";

export function getAllPostModuleName() {
    const postDir = join(process.cwd(), "post");
    return readdirSync(postDir).map((fileNameWithExt) => {
        const fileName = basename(fileNameWithExt, extname(fileNameWithExt));
        const postModuleName = fileName;
        return postModuleName;
    });
}
