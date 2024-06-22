import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Post from "./pages/Post.tsx";
import Home from "./pages/Home.tsx";
import ErrorElement from "./components/ErrorElement.tsx";
import { loadPosts, loadSinglePost } from "./util/fetches.ts";
import About from "./pages/About.tsx";
import Layout from "./components/Layout.tsx";
import Loading from "./components/Loading.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        loader: loadPosts,
        element: <Home />,
      },

      {
        path: ":postId",
        loader: loadSinglePost,

        element: <Post />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider
      fallbackElement={
        <Layout>
          <Loading />
        </Layout>
      }
      router={router}
    />
  </React.StrictMode>
);
