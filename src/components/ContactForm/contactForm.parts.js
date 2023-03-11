import styled from 'styled-components';
import {Form} from 'formik';
import {Flex} from '../../styles/Mixins';

export const Wrapper = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    grid-area: 3/2/11/12;
    margin: 0 auto;
    border-radius: ${({theme}) => theme.borderRadius.l};
    max-height: 50rem;
    max-width: 60rem;

    background-color: ${({theme}) => theme.gray_500};

    &:after {
        position: absolute;
        top: 0;
        left: 1.2rem;
        right: 1.2rem;
        bottom: 0;
        z-index: -1;

        display: block;
        border-radius: ${({theme}) => theme.borderRadius.xxl};
        box-shadow: 0 .5rem 1rem ${({theme}) => theme.black_20};

        content: '';
    }
`;

export const FormWrapper = styled(Form)`
    ${Flex()};
    flex-direction: column;
    row-gap: 3rem;
    width: 100%;
    height: 100%;
    padding: ${({theme}) => theme.padding.xl};
`;

export const ActionsWrapper = styled.div`
    ${Flex('flex-end')};
    width: 90%;
`;
