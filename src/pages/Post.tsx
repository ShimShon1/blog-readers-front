import { useOutletContext, useParams } from "react-router-dom";
import { Comment, PostType } from "../util/fetches";
import { useReducer, useState } from "react";

export default function Post() {
  const [posts] = useOutletContext<[PostType[]]>();
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
  const [comment, setComment] = useState({
    username: "",
    title: "",
    content: "",
  });
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

  async function postComment(
    postId: string,
    newComment: Comment
  ): Promise<{ Comments: Comment[] }> {
    const response = await fetch(
      `http://localhost:3000/api/posts/${postId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(newComment),
      }
    );
    return (await response.json()).comments;
  }
  async function onCommentSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();
    console.log("ga");
    const updatedComments = await postComment(postId, comment);
    post.comments = updatedComments;
    forceUpdate();
  }

  function handleInputChange(e) {
    setComment({ ...comment, [e.target.name]: e.target.value });
  }
  console.log(comment);
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
        <h2>Post a comment:</h2>
        <form
          action=""
          method="post"
          onSubmit={e => onCommentSubmit(e)}
        >
          <label>
            Username
            <input
              type="text"
              name="username"
              className="border border-black"
              value={comment.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Title:
            <input
              type="text"
              name="title"
              className="border border-black"
              value={comment.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Content:
            <input
              type="text"
              name="content"
              className="border border-black"
              value={comment.content}
              onChange={handleInputChange}
            />
          </label>
          <button className="border border-black">Submit</button>
        </form>
      </section>
    </>
  );
}
