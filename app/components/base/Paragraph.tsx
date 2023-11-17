import { cva, VariantProps } from "class-variance-authority";

export const paragraphVariants = cva(
    {
        "max-w-prose mb-2 text-center": "base",
        "text-slate-700": "light",
        "dark:text-slate-300": "dark",
    },
    {
        variants: {
            size: {
                base: "text-base sm:text-lg",
                sm: "text-sm sm:text-lg",
            },
            defaultVariants: {
                size: "base",
            },
        },
    },
);

interface ParagraphProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof paragraphVariants> {
    ref?: React.Ref<HTMLParagraphElement>;
    isLoading?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
    className,
    size,
    children,
    ref,
    ...restProps
}) => {
    return (
        <p
            ref={ref}
            className={paragraphVariants({ className, size })}
            {...restProps}
        >
            {children}
        </p>
    );
};

export default Paragraph;
