import { Link, useLoaderData } from "react-router-dom";
import { PostType } from "../util/types";
import { useEffect, useState } from "react";

export default function Home() {
  const { posts: loadedPosts } = useLoaderData() as {
    posts: PostType[];
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState<PostType[]>(loadedPosts);
  useEffect(() => console.log("home effect"), []);

  if (!posts) return <div>404</div>;
  const postsElements = posts.map(post => {
    return (
      <div className="border p-4" key={post._id}>
        <Link to={"/" + post._id}>
          {post.title}
          {post.comments.length}
          <br />
        </Link>
      </div>
    );
  });
  return (
    <div>
      <hr />
      {postsElements}
    </div>
  );
}
