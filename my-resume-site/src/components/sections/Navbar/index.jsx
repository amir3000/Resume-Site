import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "../../pages/About";
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
    <>
      <NavbarContainer>
        <UlNavItems>
          {navbarData.map((el, id) => (
            <LinkItem el={el} key={id} />
          ))}
        </UlNavItems>
      </NavbarContainer>
      <Router>
        <Route exact path="/">
          <About /> 
        </Route>
        <Route path="/services">{/* <Service /> */}</Route>
        <Route path="/works">{/* <Portfolio /> */}</Route>
        <Route path="/blogs">{/* <Blog /> */}</Route>
        <Route path="/contact">{/* <Contact /> */}</Route>
        <Route path="/about">{/* <About /> */}</Route>
      </Router>
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
