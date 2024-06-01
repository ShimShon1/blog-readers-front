import { useState } from "react";
import { CommentType } from "../util/types";
type FormType = {
  onCommentSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    newComment: CommentType
  ) => Promise<void>;
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
    //React.ChangeEvent<HTMLInputElement>
    setNewComment({ ...newComment, [e.target.name]: e.target.value });
  }
  return (
    <form
      className="mt-2  space-y-4 text-lg text-violet-800 lg:mt-4 "
      onSubmit={e => {
        onCommentSubmit(e, newComment);
        setNewComment({
          username: "",
          title: "",
          content: "",
        });
      }}
    >
      <div className="space-y-4  ">
        <div className="">
          <input
            aria-label="username"
            className="h-10 w-full rounded-sm border border-violet-700 indent-2 focus:outline-none focus:outline-violet-400 "
            type="text"
            placeholder="Your name"
            name="username"
            onChange={handleInputChange}
            value={newComment.username}
            required
          />
        </div>
        <div className="">
          <input
            type="text"
            aria-label="title"
            placeholder="Title"
            name="title"
            onChange={handleInputChange}
            value={newComment.title}
            className="h-10 w-full rounded-sm border border-violet-700 indent-2 focus:outline-none focus:outline-violet-400 "
            required
          />
        </div>
      </div>

      <div className="">
        <textarea
          placeholder="Content"
          name="content"
          onChange={handleInputChange}
          value={newComment.content}
          rows={5}
          className="w-full rounded-md border border-violet-700 indent-2 focus:outline-none focus:outline-violet-400"
          aria-label="content"
          required
        />
      </div>
      <div className="">
        <button
          className="rounded-md bg-violet-700 px-3 py-1.5 text-sky-50 hover:bg-violet-600 focus:outline-none focus:outline-violet-400 active:bg-violet-300"
          type="submit"
        >
          Send a Comment
        </button>
      </div>
    </form>
  );
}
