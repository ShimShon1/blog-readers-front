import { Outlet } from "react-router-dom";
import "./styles/index.css";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
