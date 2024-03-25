import apple from "/images/apple.svg";
import search from "/images/search.svg";
import bag from "/images/bag.svg";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="px-10 sm:px-10 py-4 bg-[#000000CC]">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <img src={apple} alt="logo" width={18} height={18} />

        {/* Links */}
        <ul className="flex gap-4 justify-center flex-1 max-sm:hidden">
          {navLists.map((nav, i) => (
            <li
              key={i}
              className="text-gray hover:text-white transition-all cursor-pointer text-sm px-5 "
            >
              {nav}
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-4 max-sm:flex-1 max-sm:justify-end">
          <img
            src={search}
            alt="search"
            width={18}
            height={18}
            className="cursor-pointer"
          />
          <img
            src={bag}
            alt="cart"
            width={18}
            height={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
