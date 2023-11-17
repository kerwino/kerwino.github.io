"use client";
import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { Suspense, useMemo } from "react";
import { Anchor } from "lucide-react";

export type IconName = keyof typeof dynamicIconImports;

interface IconProps extends LucideProps {
    name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name]), [name]);
    return (
        <Suspense fallback={<Anchor {...props} />}>
            <LucideIcon {...props} />
        </Suspense>
    );
};

export default Icon;
