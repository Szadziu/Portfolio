import { Formik, Field, Form } from "formik";
import { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";
import { Wrapper } from "./parts";
import * as Yup from "yup";
import * as P from "./parts";

const VALIDATION_SCHEMA = Yup.object({});

const ContactForm = () => {
  // połączenie formularza z useRef
  const formRef = useRef(null);

  // połączenie intersection
  const intersection = useIntersection(formRef, { threshold: 1.0 });

  // oczekiwanie na zdarzenie

  // funkcja z animacją
  const formAnimate = (color) => {
    const formElem = formRef.current;

    // tworzenie linii czasu poprzez gsapa
    const tl = gsap.timeline();

    // uruchomienie timeline'a
    tl.to(formElem, { backgroundColor: color });
  };
  intersection && intersection.intersectionRatio >= 1
    ? formAnimate("white")
    : formAnimate("black");
  return (
    <Wrapper>
      <Formik
        initialValues={{ username: "" }}
        onSubmit={() => console.log("wysłano formularz")}
        validationSchema={VALIDATION_SCHEMA}
      >
        {() => (
          <Form>
            <P.FormTitle>Formularz kontaktowy</P.FormTitle>
            <Field type="text" name="username" id="username" />
            <P.FormButton type="submit">Leć</P.FormButton>
            <P.FormTextArea
              // onClick={formAnimate}
              ref={formRef}
              placeholder="tutaj wpisz wiadomość..."
              rows="12"
              cols="50"
            ></P.FormTextArea>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ContactForm;
