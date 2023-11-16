interface ContentProps {
    title: string;
    content: string;
}
export default function Content({ title, content }: ContentProps) {
    return (
        <article className={"prose w-full"}>
            <h1>{title}</h1>
            <p>{content}</p>
        </article>
    );
}
