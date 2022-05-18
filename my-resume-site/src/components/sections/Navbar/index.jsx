import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Blog from "../../pages/Blog";
import Portfolio from "../../pages/Protfolio";
import Services from "../../pages/Services";
import Contact from "../../pages/";
import {
  LiNavItems,
  NavbarContainer,
  NLink,
  UlNavItems,
} from "./NavbarElements";

const navbarData = [
  {
    id: 1,
    title: "About",
    to: "/About",
  },
  {
    id: 2,
    title: "Services",
    to: "/Services",
  },
  {
    id: 3,
    title: "Works",
    to: "/Works",
  },
  {
    id: 4,
    title: "Blog",
    to: "/Blog",
  },
  {
    id: 5,
    title: "Contact",
    to: "/Contact",
  },
];

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <UlNavItems>
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </UlNavItems>
      </NavbarContainer>
      <Routes>
        <Route path="/" element={<About />} exact></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Works" element={<Portfolio />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Contact" elements={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;

const LinkItem = (props) => {
  const { title, to } = props.el;
  return (
    <LiNavItems>
      <NLink to={to}>{title}</NLink>
    </LiNavItems>
  );
};
