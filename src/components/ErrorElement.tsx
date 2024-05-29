import {
  Link,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";
import Nav from "./Nav";

export default function ErrorElement() {
  const error = useRouteError();
  let errorMsg = "Something Went Wrong";
  if (isRouteErrorResponse(error)) {
    const status = error.status;
    errorMsg =
      status === 404
        ? "This page doesn't exist!"
        : status === 401
          ? "You are not authorized!"
          : status === 500
            ? "Unexpected error!"
            : "Something went wrong!";
  }
  return (
    <>
      <Nav />
      <main>
        {errorMsg}{" "}
        <Link className="text-cyan-700" to={"/"}>
          Go back Home
        </Link>
      </main>
    </>
  );
}
