import { SOCIALS } from "../../constants";
import ContactForm from "../ContactForm";
import SectionWrapper from "../generics/SectionWrapper";
import SocialsBanner from "../SocialsBanner/SocialsBanner";
import * as P from "./parts";

const Footer = () => {
  return (
    <SectionWrapper bgColor="black">
      <ContactForm></ContactForm>
      <SocialsBanner icons={SOCIALS}>tu będą ikonki</SocialsBanner>
    </SectionWrapper>
  );
};

export default Footer;
