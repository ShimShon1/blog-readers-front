import { useState } from "react";
import { CommentType } from "../util/types";
type FormType = {
  onCommentSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    newComment: CommentType
  ) => Promise<boolean>;
};

export default function Form({ onCommentSubmit }: FormType) {
  const [newComment, setNewComment] = useState({
    username: "",
    title: "",
    content: "",
  });
  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  }
  return (
    <form
      className="mt-2  space-y-4 text-lg text-violet-800 lg:mt-4 "
      onSubmit={async e => {
        const submitted = await onCommentSubmit(e, newComment);
        if (submitted) {
          setNewComment({
            username: "",
            title: "",
            content: "",
          });
        }
        return;
      }}
    >
      <input
        aria-label="username"
        className="h-10 w-full rounded-sm border border-violet-700 bg-sky-50 indent-2 focus:outline-none focus:outline-violet-400 "
        type="text"
        placeholder="Your name"
        name="username"
        onChange={handleInputChange}
        value={newComment.username}
        required
      />
      <input
        type="text"
        aria-label="title"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={newComment.title}
        className="h-10 w-full rounded-sm border border-violet-700 bg-sky-50 indent-2 focus:outline-none focus:outline-violet-400 "
        required
      />

      <textarea
        placeholder="Content"
        name="content"
        onChange={handleInputChange}
        value={newComment.content}
        rows={5}
        className="w-full rounded-md border border-violet-700 bg-sky-50 indent-2 focus:outline-none focus:outline-violet-400"
        aria-label="content"
        required
      />
      <button
        className="rounded-md bg-violet-700 px-3 py-1.5 text-sky-50 hover:bg-violet-600 focus:outline-none focus:outline-violet-400 active:bg-violet-300"
        type="submit"
      >
        Send a Comment
      </button>
    </form>
  );
}
