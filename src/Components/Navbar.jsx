import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaBars, FaCartPlus, FaTimes, FaUser } from "react-icons/fa";
import { useAppContext } from "../Context/AppContext";

const Navbar = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useAppContext();

  return (
    <>
      <nav className="navbar">
        <section className="navbar__small">
          <Link to="/">
            <h1 className="logo">Ecom</h1>
          </Link>
          <div className="hamburger" onClick={openSidebar}>
            <FaBars />
          </div>
          <ul className="nav__links small">
            <li onClick={closeSidebar}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }
              >
                About
              </NavLink>
            </li>
            <li onClick={closeSidebar}>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive ? "active__link" : "link"
                }
              >
                Products
              </NavLink>
            </li>
          </ul>
          <ul className="cart social">
            <li>
              <Link to="/" className="cart__icon" onClick={closeSidebar}>
                Cart <FaCartPlus />
              </Link>
            </li>
            <li>
              <Link to="/" className="cart__user" onClick={closeSidebar}>
                Login <FaUser />
              </Link>
            </li>
          </ul>
        </section>
      </nav>

      <section
        className={` ${isSidebarOpen ? "overlay" : "overlay overlay__hide"} `}
      >
        <section className="overlay__heading">
          <Link to="/">
            <h1 className="overlay__logo">Ecom</h1>
          </Link>
          <div className="overlay__close" onClick={closeSidebar}>
            <FaTimes />
          </div>
        </section>

        <ul className="nav__links ">
          <li onClick={closeSidebar}>
            <NavLink
              className={({ isActive }) => (isActive ? "active__link" : "link")}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li onClick={closeSidebar}>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              About
            </NavLink>
          </li>
          <li onClick={closeSidebar}>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active__link" : "link")}
            >
              Products
            </NavLink>
          </li>
        </ul>
        <ul className="cart">
          <li>
            <Link to="/" className="cart__icon" onClick={closeSidebar}>
              Cart <FaCartPlus />
            </Link>
          </li>
          <li>
            <Link to="/" className="cart__user" onClick={closeSidebar}>
              Login <FaUser />
            </Link>
          </li>
        </ul>
      </section>
      <Outlet />
    </>
  );
};

export default Navbar;
