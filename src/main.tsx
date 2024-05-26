import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Post from "./pages/Post.tsx";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },

      {
        path: ":postId",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
