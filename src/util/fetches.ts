import { APIError, Comment, PostType } from "./types";

export async function getPosts(): Promise<PostType[]> {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });
  return (await response.json()).posts;
}

export async function postComment(
  postId: string,
  newComment: Comment
): Promise<Comment[] | APIError> {
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
  const data = await response.json();
  if (response.status >= 400) {
    return data;
  }
  return data.comments;
}
