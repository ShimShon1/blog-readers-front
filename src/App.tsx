import { Outlet } from "react-router-dom";
import "./styles/index.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative grid h-full min-h-[100vh] grid-rows-[100%,2fr] bg-gradient-to-tr from-violet-950 to-violet-700 text-sky-50">
      <header className=" sticky top-0">
        <Nav />
      </header>
      <main className=" h-full p-1 text-sky-50 lg:p-5 lg:pt-0">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
