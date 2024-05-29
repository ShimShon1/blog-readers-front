import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <span>~~Blog~~</span>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <NavLink to={"/about"}>About</NavLink>
      </ul>
    </nav>
  );
}
