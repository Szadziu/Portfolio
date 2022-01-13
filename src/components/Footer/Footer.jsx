import { SOCIALS } from '../../constants';
import ContactForm from '../ContactForm';
import SectionWrapper from '../generics/SectionWrapper';
import SocialsBanner from '../SocialsBanner/SocialsBanner';

const Footer = () => {
  return (
    <SectionWrapper bgColor='black'>
      <ContactForm />
      <SocialsBanner icons={SOCIALS} />
    </SectionWrapper>
  );
};

export default Footer;
