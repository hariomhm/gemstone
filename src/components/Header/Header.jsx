import React from "react";
import Container from "../container/container";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LogOut from "./LogOut";
import Logo from "../Logo";

const Header = () => {
  const status = useSelector((state) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      url: "/",
      status: true,
    },
    {
      name: "LogIn",
      url: "/login",
      status: !status,
    },
    {
      name: "SignUp",
      url: "/signup",
      status: !status,
    },
    {
      name: "All Posts",
      url: "/all-posts",
      status: status,
    },
    {
      name: "Add Posts",
      url: "/add-post",
      status: status,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
        </nav>
        <ul className="flex ml-auto">
          {navItems.map(
            (item) =>
              item.status && (
                <li
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  onClick={() => navigate(item.url)}
                  key={item.name}
                >
                  {item.name}
                </li>
              )
          )}

          {status && (
            <li>
              <LogOut />
            </li>
          )}
        </ul>
      </Container>
    </header>
  );
};

export default Header;
