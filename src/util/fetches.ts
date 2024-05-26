export type Post = {
  _id: string;
  title: string;
  content: string;
  __v: number;
  comments: object[];
  date: string;
  isPublic: boolean;
};

export async function getPosts(): Promise<Post[]> {
  const response = await fetch("http://localhost:3000/api/posts", {
    method: "GET",
  });
  return (await response.json()).posts;
}
