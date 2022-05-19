import React from "react";
import {
  H3Title,
  AboutContainer,
  AboutWrapper,
  ContentContainer,
  HowAmIWrapper,
  PContent,
} from "./AboutElements";
import Skills from "./Skills";

const About = () => {
  return (
    <>
      <AboutContainer id="ACont">
        <AboutWrapper id="Awrapper">
          <ContentContainer>
            <HowAmIWrapper>
              <H3Title>Who Am I ?</H3Title>
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
            
            <Skills />
            
          </ContentContainer>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
