export type PostType = {
  _id: string;
  title: string;
  content: string;
  __v: number;
  comments: Comment[];
  date: string;
  isPublic: boolean;
};

export type Comment = {
  _id: string;
  username: string;
  title: string;
  content: string;
};

export async function getPosts(): Promise<PostType[]> {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });
  return (await response.json()).posts;
}
