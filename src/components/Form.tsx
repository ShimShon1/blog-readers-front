type FormType = {
  onCommentSubmit: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function Form({
  handleInputChange,
  onCommentSubmit,
}: FormType) {
  return (
    <form
      className="space-y-4  p-4 text-lg text-violet-800 "
      onSubmit={onCommentSubmit}
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
          rows={6}
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
