import type { BlogPostSummary } from "../types/blogpost";

export default function Blogpost(props: any) {
    const post = props.post as BlogPostSummary;
    const postDate = new Date(post.publishedAt);

    return <a href={
        "https://hytale.com/news/" +
        postDate.getFullYear() +
        "/" +
        postDate.getMonth() +
        "/" +
        post.slug
    } className="h-full md:h-[190px] md:max-w-full max-w-[365px] sm:max-w-[380px]">
        <div className="flex flex-col md:flex-row rounded-2xl shadow-md hover:shadow-lg">
            <img src={"https://cdn.hytale.com/variants/blog_thumb_" +
                post.coverImage.s3Key} alt="Cover for a news entry." className="rounded-tl-2xl md:rounded-bl-2xl rounded-bl-none rounded-tr-2xl md:rounded-tr-none overflow-x-clip" />

            <div className="bg-slate-200 py-5 px-8 md:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl md:rounded-bl-none h-full md:h-auto">
                <div className="max-h-full md:max-h-[130px] overflow-y-hidden">
                    <div className="font-bold text-base md:text-lg text-slate-900 leading-5">{post.title}</div>
                    <div className="pb-4 md:pb-2 text-slate-500 text-sm font-semibold">{postDate.toLocaleDateString("en-US") + " by " + post.author} </div>
                    <div className="pb-5 text-slate-800 text-sm md:text-base font-medium" >{post.bodyExcerpt} </div>
                </div>
            </div>
        </div>
    </a>
}