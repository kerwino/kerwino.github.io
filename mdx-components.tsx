import type { MDXComponents } from "mdx/types";
import { Code } from "bright";

Code.lineNumbers = true;

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        pre: Code,
        ...components,
    };
}
