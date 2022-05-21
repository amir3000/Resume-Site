import styled from "styled-components";

export const SkillsContainer = styled.section`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const SkillProgressWrap = styled.div`
  width: 100%;
  margin-bottom: 0.25rem;
  @media (min-width: 768px) {
    width: 45%;
    margin-right: 2rem;
  }
`;
export const TitleContainer = styled.div`
  margin-bottom: -1rem;
  margin-top: -15px;
  @media (min-width: 768px) {
    margin-left: 0rem;
    margin-right: 1rem;
  }
`;
export const TitleWrapp = styled.div`
  margin-bottom: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(249, 250, 251, 1);
`;
export const H5Title = styled.h5`
  color: rgba(156, 163, 175, 1);
  font-weight: 300;
  font-size: inherit;
`;
export const Persentage = styled.span`
  color: rgba(124, 58, 237, 1);
  font-weight: 700;
`;
export const ProgressBarWrapp = styled.div`
  width: 100%;
  position: relative;
  height: 0.5rem;
  border-radius: 0.25rem;
  background-color: rgba(221, 214, 254, 1);
`;
export const ProgressBar = styled.div`
  width: ${(props) => props.percentage};
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  border-radius: 0.25rem;
  background-color: rgba(124, 58, 237, 1);
`;
export const H3Container = styled.h3`
  width: 100%;
`;
export const H3Wrapper = styled.div`
  /* display:block; */
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
export const H3SkillTitle = styled.div`
  color: rgba(31, 41, 55, 1);
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin: 0;
`;
