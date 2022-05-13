import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const NavbarContainer = styled.nav`
  z-index: 10;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  top: 0px;
  position: sticky;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
  background-color: rgb(255 255 255);

  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
export const UlNavItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin:0;
  padding:0;
`;
export const LiNavItems = styled.li`
  /* color: rgb(31 41 55);
   */
  margin: .75rem;
  @media (min-width: 1024px) {
    margin-left: 1.25rem; 
    margin-right: 1.25rem; 
    align-items: center;
  }
  `;
export const NLink = styled(NavLink)`

text-decoration: none;
color: rgb(31 41 55);
font-weight: 500;
&:hover {
    color: rgb(147 51 234);
}
    
`
