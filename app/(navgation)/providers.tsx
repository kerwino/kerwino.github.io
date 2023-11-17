import { MDXProvider } from "@mdx-js/react";
import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
    return <MDXProvider>{children}</MDXProvider>;
}
