import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";
import {
  AboutMeWrapper,
  BtnLink,
  DescLink,
  H1,
  H3Title,
  ImageWrapper,
  InfoWrapper,
  LiSocial,
  MyImage,
  PDesc,
  PDetails,
  SidebarContainer,
  SocialIconsLink,
  UlSocial,
} from "./SidebarElements";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "#0",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "#0",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "#0",
  },
  {
    id: 5,
    icon: <FaBehance />,
    link: "#0",
  },
  {
    id: 6,
    icon: <FaDribbble />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaSkype />,
    link: "#0",
  },
  {
    id: 7,
    icon: <FaTwitter />,
    link: "#0",
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      <ImageWrapper id='img-wrap'>
        <MyImage src={profile} />
      </ImageWrapper>
      <InfoWrapper>
        <H1>Amir Hosein Ahmadi</H1>
        <PDesc>
          Frontend Web Developer at
          <DescLink to="https://github.com"> Amir Studio</DescLink>
        </PDesc>
        <BtnLink to="" download="">
          Download Resume
        </BtnLink>
        <UlSocial>
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </UlSocial>
      </InfoWrapper>
      <AboutMeWrapper>
        <H3Title>About Me</H3Title>
        <PDetails>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus.
        </PDetails>
      </AboutMeWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <LiSocial>
      <SocialIconsLink to={link}> {icon} </SocialIconsLink>
    </LiSocial>
  );
};
