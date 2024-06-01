import { useLoaderData } from "react-router-dom";
import { PostType } from "../util/types";
import { useState } from "react";

import PostPreview from "../components/PostPreview";

export default function Home() {
  const { posts: loadedPosts } = useLoaderData() as {
    posts: PostType[];
  };
  const [posts] = useState<PostType[]>(loadedPosts);

  if (!posts) return <div>404</div>;
  const postsElements = posts.map(post => {
    return (
      <div key={post._id}>
        <PostPreview post={post} />
      </div>
    );
  });
  return (
    <div className="mt-2 grid auto-rows-fr gap-y-1 lg:mt-4 lg:gap-y-3">
      {postsElements}
    </div>
  );
}
