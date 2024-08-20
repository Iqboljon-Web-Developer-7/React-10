import React, { useState, useEffect, memo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MobileNav from "../mobileNav/MobileNav";

import "./Header.scss";

import { RiMenu5Line } from "react-icons/ri";
import { IoIosSunny } from "react-icons/io";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiSolidHeart } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";

import logo from "@/assets/logo.svg";
import { useStateValue } from "@/context";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [data, dispatch] = useStateValue();

  useEffect(() => {
    setTheme(JSON.parse(localStorage.getItem("theme")) || "light");
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const navigateHandler = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  }, [theme]);

  const handleScroll = () => {
    window.scrollY > 110 && setIsHeaderFixed(true);
    window.scrollY < 110 && setIsHeaderFixed(false);
  };

  const themeSwitcher = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };

  return (
    <header
      className={`header__container transition-all bg-[#F8F8F8] dark:bg-slate-800 dark:text-slate-100 ${
        isHeaderFixed && "h-[4.6rem]"
      } `}
    >
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`header wrapper flex justify-between items-center py-5 h-[4.6rem] duration-200 z-10 ${
          isHeaderFixed &&
          "fixed max-w-[initial] animate-fadein shadow-md bg-[#F8F8F866] dark:bg-[#00000066] backdrop-blur-sm"
        } inset-[0_0_auto_0]`}
      >
        <div className="header__logo">
          <Link to="">
            <img
              className="brightness-0 duration-200 dark:brightness-100"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <nav className="header__nav hidden lg:flex gap-5 font-light">
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
          <NavLink to={"*"}>404</NavLink>
          <NavLink to={"/contact"}>contact</NavLink>
        </nav>
        <div className="header__contact flex items-center justify-center gap-6 ">
          <Link to={"/wishlist"} className="relative">
            {" "}
            <BiSolidHeart className="text-2xl dark:text-red-500" />
            <p
              className={`${
                data.wishlist.length <= 0 && "hidden"
              } absolute bg-[#fff999] dark:text-slate-900 rounded-full leading-3 flex items-center justify-center h-4 w-4 inset-[-.4rem_-.3rem_auto_auto] text-[.78rem]`}
            >
              {data.wishlist.length}
            </p>
          </Link>
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="text-2xl" />
            <p
              className={`${
                data.cart.length <= 0 && "hidden"
              } absolute bg-[#fff999] dark:text-slate-900 rounded-full leading-3 flex items-center justify-center h-4 w-4 inset-[-.4rem_-.3rem_auto_auto] text-[.78rem]`}
            >
              {data.cart.length}
            </p>
          </Link>
          <div className="modes flex gap-3 text-3xl">
            <IoIosSunny
              onClick={themeSwitcher}
              className={`${theme == "light" && "hidden"}`}
            />
            <MdOutlineDarkMode
              onClick={themeSwitcher}
              className={`${theme == "dark" && "hidden"}`}
            />
          </div>
          <RiMenu5Line
            className="lg:hidden text-3xl"
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
