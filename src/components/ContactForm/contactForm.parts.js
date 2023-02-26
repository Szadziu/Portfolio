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
    max-height: 500px;
    max-width: 600px;

    background-color: ${({theme}) => theme.gray_500};

    &:after {
        position: absolute;
        top: 0;
        left: 12px;
        right: 12px;
        bottom: 0;
        z-index: -1;

        display: block;
        border-radius: ${({theme}) => theme.borderRadius.xxl};
        box-shadow: 0 5px 10px ${({theme}) => theme.black_20};

        content: '';
    }
`;

export const FormWrapper = styled(Form)`
    ${Flex()};
    flex-direction: column;
    row-gap: 30px;
    width: 100%;
    height: 100%;
    padding: ${({theme}) => theme.padding.xl};
`;

// export const CooperateInfo = styled.p`
//     ${Flex('flex-start', 'flex-start')};
//     width: 90%;
//     padding: ${({ theme }) => theme.padding.m} 0;

//     margin-top: ${({ theme }) => theme.margin.m};

//     color: ${({ theme }) => theme.gray_300};

//     font-size: ${({ theme }) => theme.fontSize.xxs};

//     user-select: none;

//     @media ${device.mobileM} {
//         font-size: ${({ theme }) => theme.fontSize.xs};
//     }

//     @media ${device.mobileL} {
//         font-size: ${({ theme }) => theme.fontSize.m};
//     }
// `;

export const ActionsWrapper = styled.div`
    ${Flex('flex-end')};
    width: 90%;
`;
