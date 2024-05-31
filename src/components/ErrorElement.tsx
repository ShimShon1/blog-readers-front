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
    <div className=" min-h-[100vh]  bg-gradient-to-tr from-violet-950 to-violet-700 text-sky-50">
      <Nav />
      <main className="  m-auto mt-1 h-full gap-1 bg-violet-950 p-3 pb-2 text-lg shadow-lg lg:mt-2 lg:w-11/12 lg:gap-3 lg:p-4 lg:pb-2 lg:pt-3 lg:text-xl lg:shadow-2xl">
        <p>
          {errorMsg}{" "}
          <Link className="ml-2 text-cyan-600" to={"/"}>
            Go back Home
          </Link>
        </p>
      </main>
    </div>
  );
}
