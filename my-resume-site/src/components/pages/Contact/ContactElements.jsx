import styled from "styled-components";

export const SectionContainer = styled.section`
  padding-bottom: 2.5rem;
`;
export const FormWrapper = styled.div`
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
  padding: 2rem;
  border-radius: 0.375rem;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  @media (min-width: 768px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

export const H3titleWrapp = styled.div`
  margin: 0.75rem;
`;
export const H3Title = styled.h3`
  color: rgba(31, 41, 55, 1);
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
`;
export const FormFileds = styled.div`
 margin: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const FiledWrapper = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const InputFiled = styled.input`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: rgba(243, 244, 246, 1);
  background-color: rgba(255, 255, 255, 1);
`;

export const MessageInput = styled.textarea`
  width: 100%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: rgba(243, 244, 246, 1);
  background-color: rgba(255, 255, 255, 1);
  resize: vertical;
`;
export const BtnSubmit = styled.input`
  letter-spacing: 0.025em;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  line-height: 1.75rem;
  cursor: pointer;
  border-width: 0px;
  border-radius: 0.25rem;
  background-color: rgba(124, 58, 237, 1);
`;
export const ErrorSection = styled.div`
  width: 100%;
  color: #d52811ec;
  border:none;
  padding: 0.5rem ;
  /* padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem; */
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-width: 1px;
  border-radius: 0.25rem;
  border-color: rgba(243, 244, 246, 1);
  background-color: rgba(255, 255, 255, 1);
`;
