"use client";
import clsx from "clsx";
import { Input } from "antd";
import { useCallback, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function SearchBar() {
    if (typeof window === "undefined") {
        throw { digest: "NEXT_DYNAMIC_NO_SSR_CODE" };
    }
    const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> =
        useCallback((e) => {
            e.preventDefault();
            console.log(e.target.value);
        }, []);

    const [width, setWidth] = useState(() => window.innerWidth);

    useEffect(() => {
        function handler(e: any) {
            setWidth(e.target.innerWidth);
        }
        window.addEventListener("resize", handler);
        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    return (
        <>
            <div
                className={clsx([
                    "text-yellow-500",
                    "sm:text-red-500",
                    "md:text-blue-500",
                    "lg:text-green-500",
                ])}
            >
                Hello Width:<span>{width}</span>
            </div>
        </>
    );
}
