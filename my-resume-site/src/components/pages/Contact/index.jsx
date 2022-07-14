import React, { useState } from "react";
import Joi from "joi";
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
const Contact = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message:'',
    errors: {},
  });

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    message: Joi.string().required().min(5).max(500),
  });
  const validation = ()=> {
    const result  = schema.validate( state, {abortEarly:true});
    console.log(result);
  }

 const handleChange = ({currentTarget : target})  => {
  const tmp = {...state}
  console.log(target.name);
  tmp[target.name] = target.value;
  setState(tmp)

 }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validation()
   };

  return (
    <>
      <SectionContainer>
        <FormWrapper id="frm-wrp">
          <FormElements id="form-tag" onSubmit={handleSubmit}>
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
                    value={state.name}
                    onChange={handleChange}
                    // required
                  />
                  
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <InputFiled
                    type="Email"
                    name="email"
                    placeholder="Eamil:"
                    value={state.email}
                    onChange={handleChange}
                  />
                </FiledMargin>
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <FiledMargin>
                  <InputFiled
                    type="text"
                    name="subject"
                    placeholder="Subject:"
                    value={state.subject}
                    onChange={handleChange}
                    // required
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
                    value={state.message}
                    onChange={handleChange}
                    // required
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
