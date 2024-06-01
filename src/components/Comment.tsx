import { CommentType } from "../util/types";

export default function Comment({
  comment,
}: {
  comment: CommentType;
}) {
  const date = comment.date
    ? new Date(comment.date).toLocaleString()
    : "unknown";
  return (
    <article
      className="space-y-3 bg-violet-900 bg-opacity-30 p-4 pb-2 pt-3 shadow-md lg:pt-4 "
      key={comment._id}
    >
      <div>
        <h3 className="  text-lg lg:text-xl ">{comment.title}</h3>
        <p className="">{comment.content}</p>
      </div>
      <hr className="opacity-10" />
      <div className="flex justify-between">
        <p className="text-xs">By: {comment.username}</p>
        <p className="mb-1 text-xs text-slate-300 ">{date}</p>
      </div>
    </article>
  );
}
