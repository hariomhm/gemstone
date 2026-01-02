import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";
import Logo from "../Logo";
import Container from "../container/Container";

const Header = () => {
  const status = useSelector((state) => state.auth.status);
  const [isMenu, setIsMenu] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { name: "Home", url: "/", status: true },
    { name: "LogIn", url: "/login", status: !status },
    { name: "SignUp", url: "/signup", status: !status },
    { name: "All Posts", url: "/all-posts", status },
    { name: "Add Posts", url: "/add-post", status },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xl">
      <Container className="flex items-center py-3">
        {/* Logo */}
        <Link to="/" className="mr-4">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <ul className="ml-auto hidden min-[580px]:flex items-center gap-2">
          {navItems.map(
            (item) =>
              item.status && (
                <li
                  key={item.name}
                  onClick={() => navigate(item.url)}
                  className="cursor-pointer px-6 py-2 rounded-full hover:bg-blue-100"
                >
                  {item.name}
                </li>
              )
          )}
          {status && <LogOut />}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenu(true)}
          className="ml-auto min-[580px]:hidden"
        >
          ☰
        </button>
      </Container>

      {/* Mobile Popup Menu */}
      <div
        className={`fixed inset-0 z-50 min-[580px]:hidden ${
          isMenu ? "block" : "hidden"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsMenu(false)}
        ></div>

        {/* Menu Box */}
        <div className="absolute top-16 right-4 w-64 bg-white rounded-xl shadow-xl">
          <div className="flex justify-between items-center px-4 py-3 border-b">
            <span className="font-semibold">Menu</span>
            <button
              onClick={() => setIsMenu(false)}
              className="text-xl leading-none"
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col">
            {navItems.map(
              (item) =>
                item.status && (
                  <li
                  isA
                    key={item.name}
                    onClick={() => {
                      navigate(item.url);
                      setIsMenu(false);
                    }}
                    className="px-4 py-3 hover:bg-blue-100 cursor-pointer"
                  >
                    {item.name}

                  </li>
                )
            )}
            {status && (
              <li className="px-4 py-3 border-t">
                <LogOut />
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
