import { useRef, useState } from 'react';
import Input from './Input';
import FormButton from './FormButton';
import TextArea from './TextArea';
import Label from '../generics/Label';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { submitAnimation } from './submitAnimation';
import * as P from './parts';

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
    submitAnimation(buttonRef);
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
              label='Imię'
              id='username'
              placeholder='wpisz swoje imię'
            />
            <Input
              errors={errors.email}
              type='email'
              name='email'
              label='E-mail'
              id='email'
              placeholder='podaj e-mail'
            />
            <TextArea
              errors={errors.body}
              name='body'
              id='body'
              label='Wiadomość'
              placeholder='wpisz swoją wiadomość tutaj...'
              as='textarea'
            />
            {/* <FormButton ref={buttonRef} isSubmitted={isSendForm} type='submit'>
              Wyślij
            </FormButton>
            <P.CooperateInfo>
              W celu nawiązania współpracy proszę o kontakt
            </P.CooperateInfo> */}
          </P.FormWrapper>
        )}
      </Formik>
    </P.Wrapper>
  );
};

export default ContactForm;
