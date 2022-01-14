import { SOCIALS } from '../../constants';
import { useTheme } from 'styled-components';
import ContactForm from '../ContactForm';
import SectionWrapper from '../generics/SectionWrapper';
import SocialsBanner from '../SocialsBanner/SocialsBanner';

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
