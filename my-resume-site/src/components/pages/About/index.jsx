import React from "react";
import {
  H3Title,
  AboutContainer,
  AboutWrapper,
  ContentContainer,
  HowAmIWrapper,
  PContent,
} from "./AboutElements";

const About = () => {
  return (
    <>
      <AboutContainer>
        <AboutWrapper>
          <ContentContainer>
            <HowAmIWrapper>
              <H3Title>AboutWho am i?</H3Title>
              <PContent>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Veritatis dignissimos aperiam, quos ratione beatae ipsam
                distinctio sit dolorum labore voluptas sunt quo itaque harum at
                aliquam, molestiae ipsa. Exercitationem, laudantium! Commodi
                recusandae natus molestiae dolorum totam eum sit, possimus,
                temporibus distinctio dolor consequatur tenetur quo
                reprehenderit asperiores velit ullam tempora nam quod. Quia
                debitis error amet atque ad dolorum architecto?
              </PContent>
            </HowAmIWrapper>
            {/* <SkillsWrapper>

      </SkillsWrapper> */}
          </ContentContainer>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
