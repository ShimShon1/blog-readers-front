import { Link, useLoaderData } from "react-router-dom";
import { PostType } from "../util/types";
import { useState } from "react";
import commentsIcon from "../assets/comments.svg";
import viewsIcon from "../assets/eye.svg";

export default function Home() {
  const { posts: loadedPosts } = useLoaderData() as {
    posts: PostType[];
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts] = useState<PostType[]>(loadedPosts);

  if (!posts) return <div>404</div>;
  const postsElements = posts.map(post => {
    const date = new Date(post.date).toLocaleString();
    return (
      <div>
        <Link to={"/" + post._id}>
          <article
            className="relative  m-auto grid h-full gap-1 border-t-[1px] bg-violet-950 p-3 pb-2 shadow-lg hover:cursor-pointer hover:bg-opacity-65 lg:w-11/12 lg:p-4 lg:pb-2 lg:pt-3 lg:shadow-2xl"
            key={post._id}
          >
            <h2 className="text-base lg:text-lg">{post.title}</h2>
            <p className="  max-h-6 max-w-[40ch] overflow-hidden text-sm text-slate-300 lg:max-w-[80ch] lg:text-base">
              {post.content + "..."}
            </p>

            <div className="flex items-center justify-between gap-2 self-end text-sm   lg:text-base">
              <span className="text-xs text-slate-400 lg:text-sm">
                {date}
              </span>

              <div className="flex items-center gap-2 lg:absolute lg:right-5 lg:top-[15%] lg:flex-col lg:justify-center ">
                <div className="flex items-center gap-1">
                  <img
                    src={viewsIcon}
                    className=" h-auto w-4 lg:w-6 "
                    width={17}
                    alt=""
                  />
                  {post.views}
                </div>
                <div className="flex gap-1 ">
                  <img
                    src={commentsIcon}
                    alt=""
                    className="w-4 lg:w-6"
                  />
                  {post.comments.length}
                </div>
              </div>
            </div>
          </article>
        </Link>
      </div>
    );
  });
  return (
    <div className="mt-2 grid auto-rows-fr gap-y-1 lg:mt-4 lg:gap-y-3">
      {postsElements}
    </div>
  );
}
