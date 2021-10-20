import { Formik, Form } from "formik";
import { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Wrapper } from "./parts";
import * as Yup from "yup";
import * as P from "./parts";

const VALIDATION_SCHEMA = Yup.object({
  username: Yup.string().min(2, "Uzupełnij to pole"),
  body: Yup.string().min(5, "Brak treści!"),
});

const ContactForm = () => {
  // połączenie formularza z useRef
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  // połączenie intersection
  const intersection = useIntersection(formRef, { threshold: 1.0 });

  // oczekiwanie na zdarzenie

  // funkcja z animacją
  const formAnimate = (color) => {
    const formElem = formRef.current;
    gsap.to(formElem, { backgroundColor: color });
  };
  intersection && intersection.intersectionRatio >= 1 && formAnimate("white");

  // funkcja z animacją buttona submit
  const submitAnimate = () => {
    const button = buttonRef.current;
    const tl = gsap.timeline();
    tl.to(button, { x: 400, y: -280, duration: 3, scale: 0, opacity: 0 })
      .to(button, { x: 0, y: 0, duration: 2 })
      .to(button, { scale: 1, duration: 2, opacity: 1 });
  };

  const handleSubmit = () => {
    console.log("wysłano");
  };

  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "", body: "" }}
        onSubmit={() => handleSubmit()}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ errors }) => (
          <Form>
            <P.FormTitle>Formularz kontaktowy</P.FormTitle>
            <P.Input type="text" name="username" id="username" />
            <P.Comment style={{ color: "red" }} cords={{ x: 35, y: 0 }}>
              {errors.username}
            </P.Comment>
            <P.FormButton
              onClick={() => submitAnimate()}
              ref={buttonRef}
              type="submit"
            >
              Leć
            </P.FormButton>
            <P.FormTextArea
              name="body"
              id="body"
              ref={formRef}
              placeholder="tutaj wpisz wiadomość..."
              type="textarea"
              cols="50"
              rows="5"
            ></P.FormTextArea>
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
