import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import Comment from '../generics/Comment';

import Input from './Input';
import FormButton from './FormButton';
import TextArea from './TextArea';

import VALIDATION_SCHEMA from './validationSchema';
import { submitAnimation } from './submitAnimation';

import * as P from './contactForm.parts';

const ContactForm = () => {
    const [isSendForm, setIsSendForm] = useState(false);
    const buttonRef = useRef(null);
    const formRef = useRef(null);

    const handleSubmit = (values) => {
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(() => {
                submitAnimation(buttonRef);
                values.username = '';
                values.body = '';
                values.email = '';

                setTimeout(() => {
                    setIsSendForm(true);
                    setTimeout(() => setIsSendForm(false), 5000);
                }, 200);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <P.Wrapper id="contact">
            <Formik
                initialValues={{ username: '', body: '', email: '' }}
                onSubmit={handleSubmit}
                validationSchema={VALIDATION_SCHEMA}
            >
                {({ errors }) => (
                    <P.FormWrapper ref={formRef}>
                        <Input
                            errors={errors.username}
                            type="text"
                            name="username"
                            label="Imię"
                            id="username"
                            placeholder="wpisz swoje imię"
                        />
                        <Input
                            errors={errors.email}
                            type="email"
                            name="email"
                            label="E-mail"
                            id="email"
                            placeholder="podaj e-mail"
                        />
                        <TextArea
                            errors={errors.body}
                            name="body"
                            id="body"
                            label="Wiadomość"
                            placeholder="wpisz swoją wiadomość tutaj..."
                        />

                        {isSendForm && <Comment info>Wysłano</Comment>}
                        <FormButton ref={buttonRef} type="submit">
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
