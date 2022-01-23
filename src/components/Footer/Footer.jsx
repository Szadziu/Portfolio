import { SOCIALS } from '../../constants';
import { useTheme } from 'styled-components';
import ContactForm from '../ContactForm';
import SectionWrapper from '../generics/SectionWrapper';
import SocialsBanner from '../SocialsBanner/SocialsBanner';
import Badges from '../Badges';
import { Badge } from '../Badges/parts';

const Footer = () => {
  const theme = useTheme();
  return (
    <SectionWrapper bgColor={theme.gray}>
      <ContactForm />
      <SocialsBanner icons={SOCIALS} />
      {/* <Badges /> */}
    </SectionWrapper>
  );
};

export default Footer;
