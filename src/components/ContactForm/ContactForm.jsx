import { Formik, Form } from 'formik';
import { useRef, useState } from 'react';
import Input from './Input';
import FormButton from './FormButton';
import TextArea from './TextArea';
import * as Yup from 'yup';
import * as P from './parts';
import { submitAnimate } from '../../animations/submitAnimate';
import { TextAreaField } from './TextArea/parts';

// tutaj istnieje problem dotyczący weryfikacji wysłania pustego formularza, obecnie nie jest to w żaden sposób chronione. Nie bardzo rozumiem dlaczego warunek min(2) tego nie objął. Do poprawy później.
const VALIDATION_SCHEMA = Yup.object({
  username: Yup.string()
    .min(2, 'Wpisz minimum 2 znaki!')
    .required('Imię jest wymagane'),
  body: Yup.string()
    .min(5, 'Wpisz minimum 5 znaków!')
    .required('Uzupełnij pole wiadomości'),
  email: Yup.string()
    .email('Niepoprawny adres e-mail')
    .required('Adres e-mail jest wymagany'),
});

const ContactForm = () => {
  const [isSendForm, setIsSendForm] = useState(false);
  const buttonRef = useRef(null);

  const handleSubmit = (values) => {
    submitAnimate(buttonRef);
    values.username = '';
    values.body = '';
    values.email = '';

    setTimeout(() => {
      setIsSendForm(true);
      setTimeout(() => setIsSendForm(false), 5000);
    }, 200);
  };

  return (
    <P.Wrapper id='contact'>
      <Formik
        initialValues={{ username: '', body: '', email: '' }}
        onSubmit={handleSubmit}
        validationSchema={VALIDATION_SCHEMA}
      >
        {({ errors }) => (
          <P.FormWrapper>
            <P.FormTitle>kontakt do mnie</P.FormTitle>

            <Input
              errors={errors.username}
              type='text'
              name='username'
              id='username'
              placeholder='wpisz swoje imię'
            />
            <Input
              errors={errors.email}
              type='email'
              name='email'
              id='email'
              placeholder='podaj e-mail'
            />
            <TextArea
              errors={errors.body}
              name='body'
              id='body'
              placeholder='wpisz swoją wiadomość tutaj...'
              as='textarea'
            />
            <FormButton ref={buttonRef} isSubmitted={isSendForm} type='submit'>
              Wyślij
            </FormButton>
          </P.FormWrapper>
        )}
      </Formik>
    </P.Wrapper>
  );
};

export default ContactForm;
