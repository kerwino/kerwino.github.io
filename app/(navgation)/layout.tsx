import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NvaBar";
import clsx from "clsx";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home",
    description: "Personal site",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={clsx([
                    inter.className,
                    "bg-white h-screen text-black text-2xl",
                ])}
            >
                <header>
                    <NavBar />
                </header>
                <main className={"w-screen flex justify-center"}>
                    {children}
                </main>
                <footer
                    className={
                        "flex items-center justify-center h-10 border-t border-slate-500"
                    }
                >
                    Footer
                </footer>
            </body>
        </html>
    );
}
