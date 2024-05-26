import { useOutletContext, useParams } from "react-router-dom";
import { PostType } from "../util/fetches";

export default function Post() {
  const [posts] = useOutletContext<[PostType[]]>();

  const postId = useParams().postId;
  const post = posts.find(post => post._id == postId);
  if (!post) {
    return <h1>404 not found</h1>;
  }

  const comments = !post.comments
    ? "No comments"
    : post.comments.map(comment => (
        <article className="border">
          <h3>{comment.title}</h3>
          <p>{comment.content}</p>
          <p>By: {comment.username}</p>
        </article>
      ));
  return (
    <>
      <section>
        <article>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
          <p>created at: {post.date}</p>
          <hr />
        </article>
      </section>
      <section>
        <h2>comments:</h2>
        {comments}
      </section>
    </>
  );
}
