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
      <Link to={"/" + post._id}>
        <article
          className=" border-t-[1px] bg-violet-950 p-4 shadow-lg hover:cursor-pointer hover:bg-opacity-65"
          key={post._id}
        >
          <h2>{post.title}</h2>
          <p className=" text-slate-300">
            {post.content.substring(0, 50) + "..."}
          </p>

          <div>
            <div className="flex gap-2">
              <img src={viewsIcon} width={20} alt="" />
              {post.views}
            </div>
            <div className="flex gap-2">
              <img src={commentsIcon} width={20} alt="" />
              {post.comments.length}
            </div>
          </div>

          <br />
          <span className="text-xs text-slate-300">{date}</span>
        </article>
      </Link>
    );
  });
  return <div>{postsElements}</div>;
}
