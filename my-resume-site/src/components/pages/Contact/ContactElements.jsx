import styled from "styled-components";

export const SectionContainer = styled.section`
  //.pb-10
  padding-bottom: 2.5rem;
`;
export const FormWrapper = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
  //.md:px-4
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
  }
`;
export const FormElements = styled.form`
  //.p-8
  padding: 2rem;
  //.rounded-md
  border-radius: 0.375rem;
  //bg-white
  background-color: rgba(255, 255, 255, 1);
  //shadow-md
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  //.md:px-4
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const H3titleWrapp = styled.div`
  margin: 0.75rem;
`;
export const H3Title = styled.h3`
  //.text-gray-800
  color: rgba(31, 41, 55, 1);
  //.mb-6
  margin-bottom: 1.5rem;
  //.text-2xl
  font-size: 1.5rem;
  line-height: 2rem;
  //.font-bold
  font-weight: 700;
`;
export const FormFileds = styled.div`
  //.flex
  display: flex;
  //.flex-wrap
  flex-wrap: wrap;
  //.w-full
  width: 100%;
  //.md:w-1/2
  /* @media (min-width: 768px) {
    width: 50%;
  } */
`;
export const FiledMargin = styled.div`
  //.m-3
  margin: 0.75rem;
`;
export const FiledWrapper = styled.div`
  //.w-full
  width: 100%;
  //.md:w-1/2
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const InputFiled = styled.input`
  //.w-full
  width: 100%;
  //.px-6
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  //.py-4
  padding-top: 1rem;
  padding-bottom: 1rem;
  //.text-sm
  font-size: 0.875rem;
  line-height: 1.25rem;
  //.border
  border-width: 1px;
  //.rounded
  border-radius: 0.25rem;
  //.border-gray-100
  border-color: rgba(243, 244, 246, 1);
  //.bg-white
  background-color: rgba(255, 255, 255, 1);
`;

export const MessageInput = styled.textarea`
 //.w-full
 width: 100%;
  //.px-6
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  //.py-4
  padding-top: 1rem;
  padding-bottom: 1rem;
  //.text-sm
  font-size: 0.875rem;
  line-height: 1.25rem;
  //.border
  border-width: 1px;
  //.rounded
  border-radius: 0.25rem;
  //.border-gray-100
  border-color: rgba(243, 244, 246, 1);
  //.bg-white
  background-color: rgba(255, 255, 255, 1);
  //textarea 
    resize: vertical;
  
`
export const BtnSubmit = styled.input`
  //.tracking-wide
  letter-spacing: 0.025em;
  //text-white
  color: rgba(255, 255, 255, 1);
  //.text-center
  text-align: center;
  //.px-6
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  //.py-3
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  //.leading-7
  line-height: 1.75rem;
  //.cursor-pointer
  cursor: pointer;
  //.border-0
  border-width: 0px;
  //.rounded
  border-radius: 0.25rem;
  //.bg-purple-600
  background-color: rgba(124, 58, 237, 1);
`;
