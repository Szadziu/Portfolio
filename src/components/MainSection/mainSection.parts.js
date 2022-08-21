import styled from 'styled-components';
import { SectionTitle } from '../../styles/Mixins';

export const MainSectionTitle = styled.h1`
    ${SectionTitle(({ color }) => color)};
`;
