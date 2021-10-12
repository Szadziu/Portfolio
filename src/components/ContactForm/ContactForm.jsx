import { Formik, Field, Form } from "formik";
import { Wrapper } from "./parts";
import * as Yup from "yup";
import * as P from "./parts";

const VALIDATION_SCHEMA = Yup.object({});

const ContactForm = () => {
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
