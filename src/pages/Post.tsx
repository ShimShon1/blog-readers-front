import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import {
  CommentType,
  PostType,
  errorObject,
  isAPIError,
} from "../util/types";
import { postComment } from "../util/fetches";
import Form from "../components/Form";
import Comment from "../components/Comment";

export default function Post() {
  const postId = useParams().postId!;
  const { post: loadedPost } = useLoaderData() as { post: PostType };
  const [post, setPost] = useState<PostType>(loadedPost);

  const [newCommentErrors, setNewCommentErrors] = useState<
    errorObject[]
  >([]);
  async function onCommentSubmit(
    e: React.FormEvent<HTMLFormElement>,
    newComment: CommentType
  ) {
    if (post && postId) {
      e.preventDefault();
      const updatedComments = await postComment(postId, newComment);
      if (isAPIError(updatedComments)) {
        setNewCommentErrors(updatedComments.errors);
        return false;
      }
      setPost({ ...post, comments: updatedComments });
      setNewCommentErrors([]);
      return true;
    }
    return false;
  }
  const comments = !post?.comments
    ? "No comments"
    : post?.comments.map(comment => <Comment comment={comment} />);
  return (
    <div className="relative m-auto   grid  gap-1 border-t-[1px] bg-violet-950 p-3 pb-2 shadow-lg  lg:w-11/12 lg:gap-3 lg:p-7   lg:shadow-2xl">
      <section aria-label="Post">
        <h1 className=" text-2xl tracking-wide lg:text-3xl">
          {post?.title}
        </h1>
        <p className="text-sm text-slate-400 lg:text-base">
          {new Date(post?.date).toLocaleString()}
        </p>
        <p className=" mt-2 max-w-[85ch] lg:mt-4 lg:text-lg lg:leading-8 xl:grid">
          {post?.content}
        </p>
      </section>
      <section aria-label="Comments">
        <h2 className="my-2 text-xl lg:my-4 lg:text-2xl">
          comments:
        </h2>
        <div className="mb-6 space-y-6">{comments}</div>
        <h2 className="mt-2 text-lg lg:mt-4 lg:text-xl ">
          Post a comment:
        </h2>

        <Form onCommentSubmit={onCommentSubmit} />

        <p className="pt-2 text-red-200 lg:text-xl">
          {newCommentErrors.length
            ? newCommentErrors.map(err => <div>{err.msg}</div>)
            : ""}
        </p>
      </section>
    </div>
  );
}
