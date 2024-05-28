import { APIError, Comment } from "./types";

export async function loadPosts() {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });
  if (response.status != 200) {
    throw response;
  }
  return response;
}

export async function loadSinglePost({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/posts/${params.postId}`,
    {
      method: "GET",
    }
  );
  if (response.status != 200) {
    throw response;
  }

  return response;
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
