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
  InputFiled,
  BtnSubmit,
  MessageInput,
  ErrorSection,
} from "./ContactElements";
const Contact = () => {
  const [state, setState] = useState({
    form: {
      name: "",
      email: "",
      message: "",
      subject: "",
    },
    errors: {},
  });

  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required().label("Name"),
    email: Joi.string()
      .label("Email")
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    subject: Joi.string().alphanum().min(3).max(30).required().label("Subject"),
    message: Joi.string().required().min(5).max(500).label("Message"),
  });
  const validate = () => {
    const result = schema.validate(state.form, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (const item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    console.log(errors);
    setState({ ...state, errors: errors || {} });
    if (errors) return;
    console.log("submited");
  };

  const handleChange = ({ currentTarget: target }) => {
    const tmp = { ...state };
    tmp.form[target.name] = target.value;
    setState(tmp);
  };

  return (
    <>
      <SectionContainer id ="main-section">
        <FormWrapper id="frm-wrp">
          <FormElements id="form-tag" onSubmit={handleSubmit}>
            <H3titleWrapp id="h3-wrp">
              <H3Title>Get in Touch</H3Title>
            </H3titleWrapp>
            <FormFileds id="frm-fileds">
              <FiledWrapper id="fld-wrp">
                <InputFiled
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={state.form.name}
                  onChange={handleChange}
                />
                {state.errors && (
                  <ErrorSection error={true}>{state.errors.name}</ErrorSection>
                )}
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <InputFiled
                  type="text"
                  name="email"
                  placeholder="Eamil:"
                  value={state.form.email}
                  onChange={handleChange}
                />
                {state.errors && (
                  <ErrorSection>{state.errors.email}</ErrorSection>
                )}
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <InputFiled
                  type="text"
                  name="subject"
                  placeholder="Subject:"
                  value={state.form.subject}
                  onChange={handleChange}
                />
                {state.errors && (
                  <ErrorSection error={true}>
                    {state.errors.subject}
                  </ErrorSection>
                )}
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <MessageInput
                  rows="6"
                  name="message"
                  placeholder=" Your message"
                  value={state.form.message}
                  onChange={handleChange}
                />
                {state.errors && (
                  <ErrorSection error={true}>
                    {state.errors.message}
                  </ErrorSection>
                )}
              </FiledWrapper>
            </FormFileds>

            <FormFileds>
              <FiledWrapper>
                <BtnSubmit type="submit" value="Send Message" />
              </FiledWrapper>
            </FormFileds>
          </FormElements>
        </FormWrapper>
      </SectionContainer>
    </>
  );
};
export default Contact;
