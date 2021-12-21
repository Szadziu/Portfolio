import { Formik, Form, Field } from "formik";
import { useRef, useState } from "react";
import { Wrapper } from "./parts";
import * as Yup from "yup";
import * as P from "./parts";
import { changeBackgroundAndFontColors } from "../../utils/changeBackgroundAndFontColors";
import { submitAnimate } from "../../animations/submitAnimate";

// tutaj istnieje problem dotyczący weryfikacji wysłania pustego formularza, obecnie nie jest to w żaden sposób chronione. Nie bardzo rozumiem dlaczego warunek min(2) tego nie objął. Do poprawy później.
const VALIDATION_SCHEMA = Yup.object({
  username: Yup.string().min(2, "Wpisz minimum 2 znaki!"),
  body: Yup.string().min(5, "No content!"),
  email: Yup.string().email("Niepoprawny adres e-mail"),
});

const ContactForm = () => {
  const [isSendForm, setIsSendForm] = useState(false);
  const buttonRef = useRef(null);

  const handleSubmit = (values) => {
    submitAnimate(buttonRef);
    console.log(
      `potentially, data has been sent: ${values.username} ${values.body}`
    );
    values.username = "";
    values.body = "";
    values.email = "";

    setTimeout(() => {
      setIsSendForm(true);
      setTimeout(() => setIsSendForm(false), 5000);
    }, 200);
  };

  return (
    <Wrapper id="contact">
      <Formik
        initialValues={{ username: "", body: "", email: "" }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ errors }) => (
          <Form>
            <P.FormTitle>Skontaktuj się ze mną</P.FormTitle>
            <P.Input
              type="text"
              name="username"
              id="username"
              placeholder="wpisz swoje imię"
            />
            <P.Input
              type="text"
              name="email"
              id="email"
              placeholder="podaj e-mail"
            />
            <P.Comment style={{ color: "red" }} cords={{ top: 35, left: 0 }}>
              {errors.username}
            </P.Comment>
            <P.FormButton ref={buttonRef} type="submit">
              Wyślij
            </P.FormButton>
            {isSendForm && (
              <P.Comment
                style={{ color: "green" }}
                cords={{ top: 75, left: 8 }}
              >
                Wysłano
              </P.Comment>
            )}
            <P.FormTextArea
              name="body"
              id="body"
              placeholder="wpisz swoją wiadomość tutaj..."
              as="textarea"
              type="text"
            />
            {/* doczytać dokumentację z wersji 5.1.0 odnośnie przekazywania propsów */}
            {/* <Field
              name="body"
              id="body"
              placeholder="wpisz swoją wiadomość tutaj..."
              as="textarea"
              component={P.FormTextArea}
            /> */}
            <br />
            <P.Comment cords={{ top: 80, left: 47 }} style={{ color: "red" }}>
              {errors.body}
            </P.Comment>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;
