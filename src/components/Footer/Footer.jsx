import { useTheme } from 'styled-components';
import * as P from './footer.parts';
import SectionWrapper from '../generics/SectionWrapper';

import ContactForm from '../ContactForm';
import SocialsBanner from '../SocialsBanner';

import { SOCIALS } from '../../constants';

const Footer = () => {
    const theme = useTheme();
    return (
        <SectionWrapper bgColor={theme.gray}>
            <P.FooterSectionTitle color={theme.white}>
                kontakt do mnie
            </P.FooterSectionTitle>
            <ContactForm />
            <SocialsBanner icons={SOCIALS} />
            <P.IconsLink href="https://www.flaticon.com" title="icons">
                All icons created by Freepik or Authors from Flaticon
            </P.IconsLink>
        </SectionWrapper>
    );
};

export default Footer;
