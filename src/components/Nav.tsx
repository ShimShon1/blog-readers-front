import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="text-sky-53 bg-violet-950  p-3 pr-5  lg:p-7 lg:py-5 ">
      <div className=" flex items-center  justify-between lg:justify-start lg:gap-10">
        <h3 className="logo text-2xl lg:text-3xl">Dean's Blog</h3>
        <nav className="">
          <ul className="flex gap-4 lg:text-xl">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <NavLink to={"/about"}>About</NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}
