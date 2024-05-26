import { useOutletContext } from "react-router-dom";
import { PostType } from "../util/fetches";

export default function Home() {
  const [posts] = useOutletContext<[PostType[]]>();
  const postsElements = posts.map(post => {
    return (
      <div className="border p-4">
        <a href={"/" + post._id} key={post._id}>
          {post.title}
          <br />
        </a>
      </div>
    );
  });
  return (
    <div>
      <h1>Home</h1>
      <hr />
      {postsElements}
    </div>
  );
}
