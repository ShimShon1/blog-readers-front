import {
  Link,
  isRouteErrorResponse,
  useRouteError,
} from "react-router-dom";

export default function ErrorElement() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div>
          This page doesn't exist!{" "}
          <Link className="text-cyan-700" to={"/"}>
            Go back Home
          </Link>
        </div>
      );
    }

    if (error.status === 401) {
      return (
        <div>
          You aren't authorized to see this{" "}
          <Link className="text-cyan-700" to={"/"}>
            Go back Home
          </Link>
        </div>
      );
    }

    if (error.status >= 500) {
      return (
        <div>
          Unexpected Error
          <Link className="text-cyan-700" to={"/"}>
            Go back Home
          </Link>
        </div>
      );
    }
  }

  return <div>Something went wrong</div>;
}
