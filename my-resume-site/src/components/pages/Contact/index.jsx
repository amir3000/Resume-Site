import React from "react";
import {
  SectionContainer,
  FormWrapper,
  FormElements,
  H3titleWrapp,
  H3Title,
  FormFileds,
  FiledWrapper,
  FiledMargin,
  InputFiled,
  BtnSubmit,
  MessageInput,
} from "./ContactElements";
//  import ContactElements from "ContactElements";
const Contact = () => {
  return (
    <>
      <SectionContainer>
        <FormWrapper id="frm-wrp">
          <FormElements>
            <H3titleWrapp id="h3-wrp">
              <H3Title>Get in Touch</H3Title>
            </H3titleWrapp>

            <FormFileds id="frm-fileds">
              <FiledWrapper>
                <FiledMargin>
                  <InputFiled
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                  />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <InputFiled
                    type="Email"
                    name="Email"
                    placeholder="Eamil:"
                    required
                  />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <InputFiled
                    type="text"
                    name="Subject"
                    placeholder="Subject:"
                    required
                  />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <MessageInput
                    rows="6"
                    name="message"
                    placeholder=" Your message"
                    required
                  />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <BtnSubmit type="submit" value="Send Message" />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>
          </FormElements>
        </FormWrapper>
      </SectionContainer>
    </>
  );
};
export default Contact;
