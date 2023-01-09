import type { BlogPostSummary } from "../types/blogpost";

export default function Blogpost(props: any) {
    const post = props.post as BlogPostSummary;
    const postDate = post ? new Date(post.publishedAt) : null;

    return <a href={post ?
        ("https://hytale.com/news/" +
            postDate!.getFullYear() +
            "/" +
            postDate!.getMonth() +
            "/" +
            post.slug) : "#"
    } className="h-full md:h-[190px] md:w-full w-[365px] sm:w-[380px]">
        <div className="flex flex-col md:flex-row rounded-2xl shadow-md hover:shadow-lg">
            <img src={post ? ("https://cdn.hytale.com/variants/blog_thumb_" +
                post.coverImage.s3Key) : "tv-glitch.webp"} alt={post ? "Cover for a blogpost entry." : "Cover for unloaded blogpost."} className="md:max-w-[334px] rounded-tl-2xl md:rounded-bl-2xl rounded-bl-none rounded-tr-2xl md:rounded-tr-none overflow-x-clip" />

            <div className="bg-slate-100 py-5 px-8 md:rounded-tr-2xl rounded-br-2xl rounded-bl-2xl md:rounded-bl-none h-full md:h-auto w-full">
                <div className="max-h-full md:max-h-[130px] overflow-y-hidden">
                    {post ? <div className="font-bold text-base md:text-lg text-slate-900 leading-5">{post.title}</div> :
                        <div className="border-t-[24px] border-slate-500 lg:w-[290px] w-[260px] mb-1" />}
                    {post ? <div className="pb-4 md:pb-2 text-slate-500 text-sm font-semibold">{postDate!.toLocaleDateString("en-US") + " by " + post.author} </div>
                        : <div className="border-t-[12px] border-slate-300 w-[160px] mb-4" />}
                    {post ? <div className="pb-5 text-slate-800 text-sm md:text-base font-medium">{post.bodyExcerpt} </div> :
                        <div><div className="border-t-[16px] border-slate-400 w-full mb-2" />
                            <div className="border-t-[16px] border-slate-400 w-4/5" /></div>}
                </div>
            </div>
        </div>
    </a>
}