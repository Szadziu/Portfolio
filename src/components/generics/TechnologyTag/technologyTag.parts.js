import styled from 'styled-components';
import {TECH_COLOR_TAGS} from '../../../constants';
import { device } from '../../../constants/devices';

export const StyledTag = styled.div`
    font-size: ${({theme}) => theme.fontSize.s};
    font-weight: 600;
    background-color: ${({children}) => TECH_COLOR_TAGS[children]};
    color: ${({theme}) => theme.white};
    text-shadow: 0px 0px 2px ${({theme}) => theme.black};
    padding: 4px 10px;
    border-radius: 4px;
    user-select: none;

    @media ${device.mobileL} {
        font-size: ${({theme}) => theme.fontSize.m};
    }
`;
