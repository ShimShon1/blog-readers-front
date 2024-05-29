import { Outlet } from "react-router-dom";
import "./styles/index.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="relative h-full min-h-[200vh] bg-gradient-to-tr from-violet-950 to-violet-700 text-sky-50">
      <header className=" sticky top-0">
        <Nav />
      </header>
      <main className=" text-sky-50">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
