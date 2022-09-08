import React from "react";
// import ContactElements from "../Contact";
import * as yup from "yup";

import { useFormik } from "formik";
import {
  BtnSubmit,
  ErrorSection,
  FiledWrapper,
  FormElements,
  FormFileds,
  FormWrapper,
  H3Title,
  H3titleWrapp,
  InputFiled,
  MessageInput,
  SectionContainer,
} from "../Contact/ContactElements";

//Befor Yup I use below function for validating
//===============================================
// const validate = (values) => {
//   const errors = {};

//   if (!values.subject) {
//     errors.subject = ".مورد نیاز میباشد";
//   }
//   if (!values.author) {
//     errors.author = ".مورد نیاز میباشد";
//   }
//   if (!values.title) {
//     errors.title = ".مورد نیاز میباشد";
//   }
//   if (!values.email) {
//     errors.email = ".مورد نیاز میباشد";
//   }
//   if (!values.desc) {
//     errors.desc = ".مورد نیاز میباشد";
//   }
//   return errors;
// };
//================================================

const BlogForm = () => {
  const formik = useFormik({
    initialValues: {
      subject: "",
      title: "",
      author: "",
      email: "",
      desc: "",
    },
    validationSchema: yup.object({
      subject: yup
        .string("تیتر نمیتواند عددی باشد")
        .max(15, "باید از 15 حرف  کمتر باشد")
        .required("اين قسمت مورد نياز مي باشد.")
        .min(4, "باید از 4 حرف بیشتر باشد."),
      title: yup
        .string("تیتر نمیتواند عددی باشد")
        .max(15, "باید از 15 حرف  کمتر باشد")
        .required("اين قسمت مورد نياز مي باشد.")
        .min(4, "باید از 4 حرف بیشتر باشد."),
      author: yup
        .string("تیتر نمیتواند عددی باشد")
        .max(15, "باید از 15 حرف  کمتر باشد")
        .required("اين قسمت مورد نياز مي باشد.")
        .min(4, "باید از 4 حرف بیشتر باشد."),
      email: yup
        .string("تیتر نمیتواند عددی باشد")
        .email("لطفا رايانامه معتبر وارد کنيد")
        .max(15, "باید از 15 حرف  کمتر باشد")
        .required("اين قسمت مورد نياز مي باشد.")
        .min(4, "باید از 4 حرف بیشتر باشد."),
      desc: yup
        .string("تیتر نمیتواند عددی باشد")
        .max(500, "باید از 500 حرف  کمتر باشد")
        .required("اين قسمت مورد نياز مي باشد.")
        .min(4, "باید از 4 حرف بیشتر باشد."),
    }),

    //Befor Yup I use below function for validating 
    // validate,

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <SectionContainer style={{ direction: "rtl" }}>
      <FormWrapper id="frm-wrp">
        <FormElements id="form-tag" onSubmit={formik.handleSubmit}>
          <H3titleWrapp id="h3-wrp">
            <H3Title> ارسال مقاله </H3Title>
          </H3titleWrapp>
          <FormFileds id="frm-fileds">
            <FiledWrapper>
              <InputFiled
                type="text"
                placeholder="موضوع مقاله"
                //if dont use of "getFiledProps()" should to use below 
                //====================================================
                // onBlure={formik.handleBlur}
                // name="subject"
                // value={formik.values.subject}
                // onChange={formik.handleChange}
                {...formik.getFieldProps("subject")}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <ErrorSection>{formik.errors.subject}</ErrorSection>
              ) : null}
            </FiledWrapper>

            <FiledWrapper>
              <InputFiled
                type="text"
                placeholder="عنوان"
                {...formik.getFieldProps("title")}
              />
              {formik.touched.title && formik.errors.title ? (
                <ErrorSection> {formik.errors.title} </ErrorSection>
              ) : null}
            </FiledWrapper>

            <FiledWrapper>
              <InputFiled
                type="text"
                placeholder="نويسنده"
                {...formik.getFieldProps("author")}
              />
            </FiledWrapper>
            {formik.touched.author && formik.errors.author ? (
              <ErrorSection> {formik.errors.author} </ErrorSection>
            ) : null}

            <FiledWrapper>
              <InputFiled
                type="email"
                placeholder="رايانامه"
                {...formik.getFieldProps("email")}
              />
            </FiledWrapper>

            {formik.touched.email && formik.errors.email ? (
              <ErrorSection> {formik.errors.email}</ErrorSection>
            ) : null}
          </FormFileds>
          <FiledWrapper>
            <MessageInput
              type="textarea "
              placeholder="چکيده مقاله "
              {...formik.getFieldProps("desc")}
            />
          </FiledWrapper>

          {formik.touched.desc && formik.errors.desc ? (
            <ErrorSection>{formik.errors.desc} </ErrorSection>
          ) : null}

          <FormFileds>
            <FiledWrapper>
              <BtnSubmit type="submit" value="Send Article" />
            </FiledWrapper>
          </FormFileds>
        </FormElements>
      </FormWrapper>
    </SectionContainer>
  );
};

export default BlogForm;
