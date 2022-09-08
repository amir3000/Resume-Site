import styled from "styled-components";

export const SectionContainer = styled.section`
  padding-bottom: 2.5rem;
  -webkit-text-size-adjust: 100%;
  --tw-bg-opacity: 1;
`;
export const BlogWrapper = styled.div`
  @media (min-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  display: flex;
  flex-wrap: wrap;
`;
export const ArticleContainer = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ArticleWrapper = styled.div`
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  padding: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.375rem;

  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(249, 250, 251, 1);

  tab-size: 4;
`;
export const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 1.5rem;
  height: 14rem;
  border-radius: 0.375rem;
  background-color: rgba(221, 214, 254, 1);
`;
export const ArticleImage = styled.img`
  transition-duration: 200ms;

  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
    rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
    scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  width: 100%;
  object-position:center;
  object-fit: cover;
  height:100%;
  max-width:100%
`;
export const ArticleTitle = styled.div`
    
`
