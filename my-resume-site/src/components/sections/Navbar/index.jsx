import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import { LiNavItems, NavbarContainer, NLink, UlNavItems } from "./NavbarElements";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/about",
  },
  {
    id: 2,
    title: "Services",
    to: "/services",
  },
  {
    id: 3,
    title: "Works",
    to: "/works",
  },
  {
    id: 4,
    title: "Blogs",
    to: "/blogs",
  },
  {
    id: 5,
    title: "Contact",
    to: "/contact",
  },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <UlNavItems>
        {navbarData.map((el, id) => (
          <LinkItem el={el} key={id} />
        ))}
      </UlNavItems>
    </NavbarContainer>

    <Route>

    </Route>
  );
};

export default Navbar;

const LinkItem = (props) => {
    const { title, to } = props.el;
    return (
      <LiNavItems>
        <NLink
          to={to}
        //   activeClassName="text-purple-600"
        //   className="text-gray-800 text-medium hover:text-purple-600"
        >
          {title}
        </NLink>
      </LiNavItems>
    );
}