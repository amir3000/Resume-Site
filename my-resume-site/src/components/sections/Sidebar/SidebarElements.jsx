import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  top: 0;
  position: sticky;
  background-color: rgba(255, 255, 255, 1);
  margin-top: -10rem;
  margin-bottom: 2rem;
  /* margin-left: 20rem; */
  padding: 1.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  @media (min-width: 1024px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  @media (min-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;
export const ImageWrapper = styled.div`
  width: 6rem;
  height: 6rem;
  overflow: hidden;
  margin-bottom: 1.25rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 0.375rem;
`;
export const MyImage = styled.img`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  text-align: center;
`;
export const H1 = styled.h1`
  color: #2d3748;
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;
export const PDesc = styled.p`
  color: #cbd5e0;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const BtnLink = styled(Link)`
  letter-spacing: 0.025em;
  color: #fff;
  text-align: center;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
  line-height: 1.75rem;
  display: inline-block;
  border-width: 0px;
  border-radius: 0.25rem;
  background-color: #7c3aed;
  text-decoration: none;
`;
export const UlSocial = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
  margin: 5px;
`;
export const LiSocial = styled.li`
  width: 2rem;
  padding: 0.25rem;
`;
export const DescLink = styled(Link)`
  text-decoration: none;
  color: #7c3aed;
`;
export const SocialIconsLink = styled(Link)`
  color: #7c3aed;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 0.25rem;
  align-items: center;
  background-color: #faf5ff;
  &:hover {
    color: #fff;

    background-color: #7c3aed;
  }
`;
export const AboutMeWrapper = styled.div`
  padding-top: 1rem;
  text-align: justify;
`;
export const H3Title = styled.h3`
  text-transform: uppercase;
  color: rgb(31 41 55);
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
export const PDetails = styled.p`
  color: rgb(156 163 175);
  line-height: 1.625;
  font-weight: 300;
`;
