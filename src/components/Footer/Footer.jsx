import { useTheme } from 'styled-components';

import SectionWrapper from '../generics/SectionWrapper';

import ContactForm from '../ContactForm';
import SocialsBanner from '../SocialsBanner';

import { SOCIALS } from '../../constants';

const Footer = () => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={theme.gray}>
      <ContactForm />
      <SocialsBanner icons={SOCIALS} />
    </SectionWrapper>
  );
};

export default Footer;
