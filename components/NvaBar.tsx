"use client";
import Link from "next/link";

interface NavItemProps extends React.PropsWithChildren {
    pathName: string;
    iconName: string;
}
const NavItem: React.FC<NavItemProps> = ({ pathName, iconName, children }) => {
    return (
        <Link href={pathName}>
            <span className={"text-sm font-semibold leading-6 text-gray-900"}>
                {children}
            </span>
        </Link>
    );
};

export default function NavBar() {
    return (
        <nav
            aria-label="Global"
            className={
                "mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            }
        >
            <NavItem pathName={"/"} iconName={"home"}>
                Home
            </NavItem>
            <NavItem pathName={"/blog"} iconName={"book"}>
                Blog
            </NavItem>
            <NavItem pathName={"/projects"} iconName={"code"}>
                Projects
            </NavItem>
            <NavItem pathName={"/contact"} iconName={"contact"}>
                Contact
            </NavItem>
        </nav>
    );
}
