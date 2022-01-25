import { useRef, useState } from 'react';
import { Formik } from 'formik';

import Input from './Input';
import FormButton from './FormButton';
import TextArea from './TextArea';

import VALIDATION_SCHEMA from '../../utils/validationSchema';
import { submitAnimation } from './submitAnimation';

import * as P from './parts';

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
            <FormButton ref={buttonRef} isSubmitted={isSendForm} type='submit'>
              Wyślij
            </FormButton>
            <P.CooperateInfo>
              W celu nawiązania współpracy proszę o kontakt
            </P.CooperateInfo>
          </P.FormWrapper>
        )}
      </Formik>
    </P.Wrapper>
  );
};

export default ContactForm;
