"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/app/components/Icon";
import type { IconName } from "@/app/components/Icon";
import clsx from "clsx";

export default function NavItem({
    children,
    icon = "anchor",
    pathname,
}: {
    children: React.ReactNode;
    icon: IconName;
    pathname: string;
}) {
    const currentPath = usePathname();
    const isActive = currentPath === pathname;
    return (
        <Link
            href={pathname}
            className={clsx([
                "text-2xl text-blue-500",
                { "text-green-500": isActive },
            ])}
        >
            {" "}
            <div className={"flex gap-2 items-center"}>
                <Icon name={icon} />
                <span>{children}</span>
            </div>
        </Link>
    );
}
