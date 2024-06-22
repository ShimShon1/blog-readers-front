import { APIError, CommentType } from "./types";

// const endpoint = "http://localhost:3000";
const endpoint = "https://blog-api-ts-production.up.railway.app";

export async function loadPosts() {
  const response = await fetch(`${endpoint}/api/posts`, {
    method: "GET",
  });
  if (response.status != 200) {
    throw response;
  }
  return response;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function loadSinglePost({ params }: any) {
  const response = await fetch(
    `${endpoint}/api/posts/${params.postId}`,
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
  newComment: CommentType
): Promise<CommentType[] | APIError> {
  const response = await fetch(
    `${endpoint}/api/posts/${postId}/comments`,
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
