import { Formik, Form } from "formik";
import { useRef, useState } from "react";
import Input from "./Input";
import FormButton from "./FormButton";
import * as Yup from "yup";
import * as P from "./parts";
import { changeBackgroundAndFontColors } from "../../utils/changeBackgroundAndFontColors";
import { submitAnimate } from "../../animations/submitAnimate";

// tutaj istnieje problem dotyczący weryfikacji wysłania pustego formularza, obecnie nie jest to w żaden sposób chronione. Nie bardzo rozumiem dlaczego warunek min(2) tego nie objął. Do poprawy później.
const VALIDATION_SCHEMA = Yup.object({
  username: Yup.string().min(2, "Wpisz minimum 2 znaki!"),
  body: Yup.string().min(5, "Wpisz minimum 5 znaków!"),
  email: Yup.string().email("Niepoprawny adres e-mail"),
});

const ContactForm = () => {
  const [isSendForm, setIsSendForm] = useState(false);
  const buttonRef = useRef(null);

  const handleSubmit = (values) => {
    submitAnimate(buttonRef);
    values.username = "";
    values.body = "";
    values.email = "";

    setTimeout(() => {
      setIsSendForm(true);
      setTimeout(() => setIsSendForm(false), 5000);
    }, 200);
  };

  return (
    <P.Wrapper id="contact">
      <Formik
        initialValues={{ username: "", body: "", email: "" }}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ errors }) => (
          <P.FormWrapper>
            <P.FormTitle>kontakt do mnie</P.FormTitle>

            <Input
              errors={errors.username}
              name="username"
              id="username"
              placeholder="wpisz swoje imię"
            />
            <Input
              errors={errors.email}
              name="email"
              id="email"
              placeholder="podaj e-mail"
            />
            {/*
            {isSendForm && (
              <P.Comment
                style={{ color: "green" }}
                cords={{ top: 10, left: 8 }}
              >
                Wysłano
              </P.Comment>
            )} */}
            <P.FormTextArea
              name="body"
              id="body"
              placeholder="wpisz swoją wiadomość tutaj..."
              as="textarea"
              type="text"
            />
            <FormButton ref={buttonRef} isSubmitted={isSendForm} type="submit">
              Wyślij
            </FormButton>
          </P.FormWrapper>
        )}
      </Formik>
    </P.Wrapper>
  );
};

export default ContactForm;
