import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center gap-4 bg-violet-950 text-sky-50">
      <h3 className="logo p-4 text-3xl">Dean's Blog</h3>
      <ul className="flex gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <NavLink to={"/about"}>About</NavLink>
      </ul>
    </nav>
  );
}
