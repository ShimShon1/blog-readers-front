import { Link, useLoaderData } from "react-router-dom";
import { PostType } from "../util/types";
import { useState } from "react";

export default function Home() {
  const { posts: loadedPosts } = useLoaderData() as {
    posts: PostType[];
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts] = useState<PostType[]>(loadedPosts);

  if (!posts) return <div>404</div>;
  const postsElements = posts.map(post => {
    return (
      <article className="border p-4" key={post._id}>
        <Link to={"/" + post._id}>{post.title}</Link>
        <br />
        {post.content}
        {post.date}
        {post.comments.length}
        {post.views}
      </article>
    );
  });
  return (
    <div>
      <hr />
      {postsElements}
    </div>
  );
}
