import Button from '../generics/Button';
import * as P from './landingPage.parts.js';
import personalPhotoImage from '../../assets/personalPhoto.png';
import {useWindowSize} from '../../hooks/useWindowSize';

const LandingPage = () => {
    const {height} = useWindowSize();

    return (
        <P.LandingPageView>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <P.BackgroundPhoto image={personalPhotoImage} currentScreenHeight={height} />
            <P.NavWrapper id="home">
                <P.PositionTitle>
                    <span className="name">Maciej Mikołajczak</span>
                    <span className="title">frontend developer</span>
                </P.PositionTitle>
                <P.NavButtonsWrapper>
                    <Button text="Moje projekty" link="projects" />
                    <Button text="Umiejętności" link="skills" />
                    {/* <Button text="Blog" href="https://web-dev-blog-6xs5kw8mj-centmsn.vercel.app/" link="#" target="_blank" /> */}
                    <Button
                        text="CV"
                        link="#"
                        href="https://drive.google.com/file/d/1VkNVv8G11ZkvgaPtVt7MQ7yTgojAEsuI/view?usp=sharing"
                        target="_blank"
                    />
                    <Button text="Kontakt" link="contact" />
                </P.NavButtonsWrapper>
            </P.NavWrapper>
        </P.LandingPageView>
    );
};

export default LandingPage;
