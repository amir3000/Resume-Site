import styled from "styled-components";

export const HomeMain = styled.main`
  min-height: 100vh;
  position: relative;
  background-color: rgb(249 250 251);
  padding-bottom: 2.5rem;
`;
export const HomeContainer = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;
export const HomeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 5rem;
  padding-right: 5rem;
`;
export const SidebarWrapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 33.333333%;
  }
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 66.666667%;
  }
`;
