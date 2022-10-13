import styled from 'styled-components';
import { Form } from 'formik';

import { device } from '../../constants/devices';
import { Flex } from '../../styles/Mixins';

export const Wrapper = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    display: flex;
    justify-content: center;
    grid-area: 2/12/11/2;
    border-radius: ${({ theme }) => theme.borderRadius.xxl};
    min-height: 450px;
    max-width: 800px;

    background-color: ${({ theme }) => theme.gray_500};

    &:after {
        position: absolute;
        top: 0;
        left: 12px;
        right: 12px;
        bottom: 0;
        z-index: -1;

        display: block;
        border-radius: ${({ theme }) => theme.borderRadius.xxl};
        box-shadow: 0 5px 10px ${({ theme }) => theme.black_20};

        content: '';
    }
`;

export const FormWrapper = styled(Form)`
    ${Flex()};
    flex-direction: column;
    width: 90%;
    height: 100%;
`;

export const CooperateInfo = styled.p`
    ${Flex('flex-start', 'flex-start')};
    width: 90%;
    padding: ${({ theme }) => theme.padding.m} 0;

    margin-top: ${({ theme }) => theme.margin.m};

    color: ${({ theme }) => theme.gray_300};

    font-size: ${({ theme }) => theme.fontSize.xxs};

    user-select: none;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.xs};
    }

    @media ${device.mobileL} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const ActionsWrapper = styled.div`
    ${Flex('flex-end')};
    width: 90%;
`;
