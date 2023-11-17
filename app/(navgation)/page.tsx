"use client";
import Content from "@/app/components/Layout/Content";
import Providers from "./providers";

export default function Home() {
    return (
        <Providers>
            <Content
                title={"Welcome to My Blog"}
                content={
                    "share finger neck pretty closer accept wear course tall announced science shirt usually safety broke spring seen mountain shake bill burn tears tower at"
                }
            />
        </Providers>
    );
}
