import { NavLink, Outlet } from "react-router-dom";
import "./styles/index.css";

function App() {
  return (
    <>
      <nav>
        <span>~~Blog~~</span>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <NavLink to={"/about"}>About</NavLink>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default App;
