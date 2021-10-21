import { Formik, Form } from "formik";
import { useRef } from "react";
import { Wrapper } from "./parts";
import * as Yup from "yup";
import * as P from "./parts";
import { changeBackgroundAndFontColors } from "../../utils/changeBackgroundAndFontColors";
import { submitAnimate } from "../../animations/submitAnimate";

// tutaj istnieje problem dotyczący weryfikacji wysłania pustego formularza, obecnie nie jest to w żaden sposób chronione. Nie bardzo rozumiem dlaczego warunek min(2) tego nie objął. Do poprawy później.
const VALIDATION_SCHEMA = Yup.object({
  username: Yup.string().min(2, "Fill in this field!"),
  body: Yup.string().min(5, "No content!"),
});

const ContactForm = () => {
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const handleSubmit = (values) => {
    submitAnimate(buttonRef);
    console.log(
      `potentially, data has been sent: ${values.username} ${values.body}`
    );
    values.username = "";
    values.body = "";
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", body: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ errors }) => (
          <Form>
            <P.FormTitle>Contact Form</P.FormTitle>
            <P.Input type="text" name="username" id="username" />
            <P.Comment style={{ color: "red" }} cords={{ x: 35, y: 0 }}>
              {errors.username}
            </P.Comment>
            <P.FormButton ref={buttonRef} type="submit">
              Fly
            </P.FormButton>
            <P.FormTextArea
              name="body"
              id="body"
              ref={formRef}
              placeholder="enter your message here..."
              type="textarea"
              cols="50"
              rows="5"
              onFocus={(e) =>
                changeBackgroundAndFontColors(e, "white", "black")
              }
              onBlur={(e) => changeBackgroundAndFontColors(e, "black", "white")}
            />
            <br />
            <P.Comment cords={{ x: 85, y: 50 }} style={{ color: "red" }}>
              {errors.body}
            </P.Comment>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;
