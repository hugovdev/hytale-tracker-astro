import React from "react";
import type { BlogPostSummary } from "../types/blogpost";
import Blogpost from "./Blogpost";

class Blogposts extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            posts: [],
            error: "",
            recentPosts: 0,
            daysSinceLastBlogpost: 0,
        };
    }

    countRecentBlogposts(posts: BlogPostSummary[]) {
        const today = new Date();
        var rPosts = 0;

        posts.map((post: any, i: number) => {
            var days = this.getDifferenceInDays(new Date(post.publishedAt), today);

            if (i == 0) {
                this.setState({ daysSinceLastBlogpost: days });
            }

            if (days <= 30) rPosts++;
        });

        this.setState({ recentPosts: rPosts });
    }

    getDifferenceInDays(date1: Date, date2: Date) {
        var diff = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    }

    async componentDidMount() {
        const promise = fetch(`https://api.allorigins.win/raw?url=https://hytale.com/api/blog/post/published?limit=5&nocache=${Date.now()}`);

        promise.catch(error => {
            console.log(error)
            this.setState({ error: error })
        });

        const responseJson = await promise.then((res) => res.text());

        const blogPosts: BlogPostSummary[] = JSON.parse(responseJson);
        this.setState({ posts: blogPosts })
        this.countRecentBlogposts(blogPosts)
    }

    render() {
        return this.state.error ? <p>Error! {this.state.error} </p> : <div>

            <div className="flex flex-wrap gap-3">
                <a href={"https://hytale.com/news/"} className="greenPill">{this.state.recentPosts} recent blogposts</a>
                <a href={"https://hytale.com/news/"} className="greenPill">{this.state.daysSinceLastBlogpost} days since last blogpost</a>
            </div>

            {this.props.inminentBlogpost ? <div className="mt-3">
                <a href={"https://hytale.com/news/"} className="yellowPill">⚠️ A blogpost will be releasing soon!</a>
            </div> : null}

            <div className="w-full m-auto">
                <div className="mt-10 inline-flex flex-col gap-8 md:gap-5 pb-8 justify-center items-center m-auto w-full">
                    {this.state.posts.length > 0 ? this.state.posts.map((post: any) => <Blogpost post={post} key={post._id} />)
                        : Array.from({ length: 5 }).map((it, index) => <Blogpost key={"bp-placeholder-" + index} />)}
                </div>
            </div>
        </div>
    }
}

export default Blogposts;
