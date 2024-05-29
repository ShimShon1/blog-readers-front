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
    ],
    errorElement: <ErrorElement />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
