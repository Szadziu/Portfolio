import * as Yup from 'yup';

const VALIDATION_SCHEMA = Yup.object({
    username: Yup.string()
        .trim()
        .min(2, 'Wpisz minimum 2 znaki')
        .required('Imię jest wymagane'),
    body: Yup.string()
        .trim()
        .min(5, 'Wpisz minimum 5 znaków')
        .required('Uzupełnij pole wiadomości'),
    email: Yup.string()
        .email('Niepoprawny adres e-mail')
        .required('Adres e-mail jest wymagany'),
});

export default VALIDATION_SCHEMA;
