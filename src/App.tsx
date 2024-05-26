import { Outlet } from "react-router-dom";
import "./styles/index.css";
import { useEffect, useState } from "react";
import { PostType, getPosts } from "./util/fetches";
function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    getPosts().then(res => setPosts(res));
    console.log("effect used");
  }, []);
  return (
    <>
      <h1 className="m-20 text-center text-5xl text-emerald-800 ">
        Welcome to my blog!
      </h1>
      <Outlet context={[posts]} />
    </>
  );
}

export default App;
