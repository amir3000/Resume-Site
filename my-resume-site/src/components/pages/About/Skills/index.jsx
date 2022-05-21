import React from "react";
import {
    H3Container,
  H3SkillTitle,
  H3Wrapper,
  H5Title,
  Persentage,
  ProgressBar,
  ProgressBarWrapp,
  SkillProgressWrap,
  SkillsContainer,
  SkillsWrapper,
  TitleContainer,
  TitleWrapp,
} from "./SkillsElements";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      title: "Html, Css, Scss",
      percentage: "95%",
    },
    {
      id: 2,
      title: "Bootstrap",
      percentage: "98%",
    },
    {
      id: 3,
      title: "TailwindCSS",
      percentage: "90%",
    },
    {
      id: 4,
      title: "Javascript",
      percentage: "70%",
    },
    {
      id: 5,
      title: "ReactJS",
      percentage: "70%",
    },
    {
      id: 6,
      title: "ExpressJS",
      percentage: "60%",
    },
    {
      id: 7,
      title: "MongoDB",
      percentage: "50%",
    },
    {
      id: 8,
      title: "Git, Github",
      percentage: "80%",
    },
  ];
  return (
    <>
      <SkillsContainer>
        <SkillsWrapper>
          <H3Container id="H3Container">
            <H3Wrapper id="H3Wrapper">
              <H3SkillTitle id="H3SklTtl">Skills</H3SkillTitle>
            </H3Wrapper>
          </H3Container>
          {skillData.map((skill, id) => (
            <SkillItem skill={skill} key={id} />
          ))}
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};
export default Skills;
const SkillItem = (props) => {
  const { skill } = props;
  return (
    <SkillProgressWrap id="SkillProgressWrap">
      <TitleContainer id="TitleContainer">
        <TitleWrapp id="TitleWrapp">
          <H5Title id="H5">{skill.title}</H5Title>
          <Persentage id="Percentage">{skill.percentage} </Persentage>
        </TitleWrapp>
      </TitleContainer>
      <ProgressBarWrapp>
        <ProgressBar percentage={skill.percentage} />
      </ProgressBarWrapp>
    </SkillProgressWrap>
  );
};
