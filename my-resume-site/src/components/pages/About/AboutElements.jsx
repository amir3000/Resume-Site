import styled from "styled-components";

export const AboutContainer = styled.section`
  padding: 1rem;
  padding-top: 2rem;
`;
export const AboutWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const ContentContainer = styled.div`
  width: 100%;
`;
export const HowAmIWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
export const H3Title = styled.h3`
  color: #1F2937;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  width:100%;
  margin: 0;
  
`;
export const PContent = styled.p`
  color: rgba(156, 163, 175);
  margin-bottom: 0.75rem;
  line-height: 1.5rem;
  font-size: 0.875rem;
`;
