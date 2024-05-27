import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostType, errorObject, isAPIError } from "../util/types";
import { getSinglePost, postComment } from "../util/fetches";

export default function Post() {
  const postId = useParams().postId;

  const [post, setPost] = useState<PostType>();
  const [newComment, setNewComment] = useState({
    username: "",
    title: "",
    content: "",
  });
  const [newCommentErrors, setNewCommentErrors] = useState<
    errorObject[]
  >([]);

  useEffect(() => {
    if (!postId) return;
    console.log(postId);
    getSinglePost(postId).then(res => setPost(res));
    console.log("Post used");
  }, [postId]);

  if (!post) {
    return <div>404 Not found</div>;
  }
  const comments = !post.comments
    ? "No comments"
    : post.comments.map(comment => (
        <article className="border" key={comment._id}>
          <h3>{comment.title}</h3>
          <p>{comment.content}</p>
          <p>By: {comment.username}</p>
        </article>
      ));

  async function onCommentSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    if (post && postId) {
      e.preventDefault();
      const updatedComments = await postComment(postId, newComment);
      if (isAPIError(updatedComments)) {
        setNewCommentErrors(updatedComments.errors);
        return;
      }
      setPost({ ...post, comments: updatedComments });
      setNewCommentErrors([]);
    }
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    //React.ChangeEvent<HTMLInputElement>
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  }
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
        <form action="" method="post" onSubmit={onCommentSubmit}>
          <label>
            Username
            <input
              required
              type="text"
              name="username"
              className="border border-black"
              value={newComment.username}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Title:
            <input
              required
              type="text"
              name="title"
              className="border border-black"
              value={newComment.title}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Content:
            <textarea
              required
              name="content"
              className="border border-black"
              value={newComment.content}
              onChange={e => handleInputChange(e)}
            />
          </label>
          <button className="border border-black">Submit</button>
        </form>
        {newCommentErrors.length
          ? newCommentErrors.map(err => <div>{err.msg}</div>)
          : ""}
      </section>
    </>
  );
}
