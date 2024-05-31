import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { PostType, errorObject, isAPIError } from "../util/types";
import { postComment } from "../util/fetches";
import Form from "../components/Form";

export default function Post() {
  const postId = useParams().postId!;
  const { post: loadedPost } = useLoaderData() as { post: PostType };
  const [post, setPost] = useState<PostType>(loadedPost);

  const [newCommentErrors, setNewCommentErrors] = useState<
    errorObject[]
  >([]);

  const comments = !post?.comments
    ? "No comments"
    : post?.comments.map(comment => (
        <article
          className="space-y-3 bg-violet-900 bg-opacity-30 p-4 pb-2 pt-1 shadow-md "
          key={comment._id}
        >
          <div>
            <h3 className="mb-1 mt-2 text-lg lg:mt-4 lg:text-xl ">
              {comment.title}
            </h3>
            <p className="">{comment.content}</p>
          </div>
          <hr className="opacity-10" />
          <p className="text-xs">By: {comment.username}</p>
        </article>
      ));

  async function onCommentSubmit(
    e: React.FormEvent<HTMLFormElement>,
    newComment: {
      username: string;
      title: string;
      content: string;
    }
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

  return (
    <div className="relative m-auto  mt-2 grid  gap-1 border-t-[1px] bg-violet-950 p-3 pb-2 shadow-lg  lg:mt-4 lg:w-11/12 lg:gap-3 lg:p-7  lg:pt-4 lg:shadow-2xl">
      <section>
        <article>
          <h1 className="lg text-2xl tracking-wide lg:text-3xl">
            {post?.title}
          </h1>
          <p className="text-sm text-slate-400 lg:text-base">
            {new Date(post?.date).toLocaleString()}
          </p>
          <p className=" mt-2 max-w-[85ch] lg:mt-4 lg:text-lg lg:leading-8 xl:grid">
            {post?.content}
          </p>
        </article>
      </section>
      <section>
        <h2 className="my-2 text-xl lg:my-4 lg:text-2xl">
          comments:
        </h2>
        <div className="mb-6 space-y-6">{comments}</div>
        <h2 className="mt-2 text-lg lg:mt-4 lg:text-xl ">
          Post a comment:
        </h2>

        <Form onCommentSubmit={onCommentSubmit} />

        {newCommentErrors.length
          ? newCommentErrors.map(err => <div>{err.msg}</div>)
          : ""}
      </section>
    </div>
  );
}
