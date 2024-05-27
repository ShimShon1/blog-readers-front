import { Link } from "react-router-dom";
import { PostType } from "../util/types";
import { useEffect, useState } from "react";
import { getPosts } from "../util/fetches";

export default function Home() {
  const [posts, setPosts] = useState<PostType[]>([]);
  useEffect(() => {
    getPosts().then(res => setPosts(res));
    console.log("effect used");
  }, []);
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
