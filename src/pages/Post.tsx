import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { PostType, errorObject, isAPIError } from "../util/types";
import { postComment } from "../util/fetches";
import Form from "../components/Form";

export default function Post() {
  const postId = useParams().postId!;
  const { post: loadedPost } = useLoaderData() as { post: PostType };
  console.log("loader", loadedPost);
  const [post, setPost] = useState<PostType>(loadedPost);
  const [newComment, setNewComment] = useState({
    username: "",
    title: "",
    content: "",
  });
  const [newCommentErrors, setNewCommentErrors] = useState<
    errorObject[]
  >([]);

  const comments = !post?.comments
    ? "No comments"
    : post?.comments.map(comment => (
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
    <div className="relative m-auto  mt-2 grid  gap-1 border-t-[1px] bg-violet-950 p-3 pb-2 shadow-lg  lg:mt-4 lg:w-11/12 lg:gap-3 lg:p-7  lg:pt-4 lg:shadow-2xl">
      <section>
        <article>
          <h1>{post?.title}</h1>
          <p>{post?.content}</p>
          <p>created at: {post?.date}</p>
          <hr />
        </article>
      </section>
      <section>
        <h2>comments:</h2>
        {comments}
        <h2>Post a comment:</h2>

        <Form
          onCommentSubmit={onCommentSubmit}
          handleInputChange={handleInputChange}
        />

        {newCommentErrors.length
          ? newCommentErrors.map(err => <div>{err.msg}</div>)
          : ""}
      </section>
    </div>
  );
}
