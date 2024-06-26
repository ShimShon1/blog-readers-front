import { ReactNode } from "react";
import Nav from "./Nav";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative grid h-full min-h-[100vh] grid-rows-[100%,2fr] bg-gradient-to-tr from-violet-950 to-violet-700 text-sky-50">
      <header className=" sticky top-0 z-10">
        <Nav />
      </header>
      <main className="p-1 pt-2 text-sky-50 lg:pt-4">{children}</main>
    </div>
  );
}
