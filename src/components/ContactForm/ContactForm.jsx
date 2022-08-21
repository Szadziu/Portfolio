import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik } from 'formik';
import Comment from '../generics/Comment';
import { Spinner } from '../Spinner/spinner.parts';

import Input from './Input';
import FormButton from './FormButton';
import TextArea from './TextArea';

import VALIDATION_SCHEMA from './validationSchema';

import * as P from './contactForm.parts';

const FORM_STATE = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
};

const initialValues = {
    body: '',
    email: '',
    username: '',
};

const ContactForm = () => {
    const [formState, setFormState] = useState(FORM_STATE.IDLE);
    const buttonRef = useRef(null);
    const formRef = useRef(null);

    const handleSubmit = (_, { resetForm }) => {
        if (formState === FORM_STATE.LOADING) return;

        setFormState(FORM_STATE.LOADING);

        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_USER_ID
            )
            .then(() => {
                resetForm();
                setFormState(FORM_STATE.SUCCESS);
            })
            .catch((error) => {
                // TODO: handle error
                console.error(error);
                setFormState(FORM_STATE.ERROR);
            })
            .finally(() => {
                setTimeout(() => {
                    setFormState(FORM_STATE.IDLE);
                }, 5000);
            });
    };

    return (
        <P.Wrapper id="contact">
            <Formik
                initialValues={initialValues}
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
                        <P.ActionsWrapper>
                            {formState === FORM_STATE.SUCCESS && (
                                <Comment info>Wysłano</Comment>
                            )}
                            <FormButton ref={buttonRef} type="submit">
                                {formState === FORM_STATE.LOADING ? (
                                    <Spinner />
                                ) : (
                                    'Wyślij'
                                )}
                            </FormButton>
                        </P.ActionsWrapper>
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
