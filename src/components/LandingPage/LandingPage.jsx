import { useTheme } from 'styled-components';
import Button from '../generics/Button';
import * as P from './landingPage.parts.js';

const LandingPage = () => {
    const theme = useTheme();

    return (
        <P.LandingPageView>
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <P.BackgroundPhoto image={theme.personalPhoto} />
            <P.NavWrapper id="home">
                <P.PositionTitle>
                    <p>Maciej Mikołajczak</p>
                    <p>junior frontend developer</p>
                </P.PositionTitle>
                <P.NavButtonsWrapper>
                    <Button text="Strona Główna" link="home" />
                    <Button text="Umiejętności" link="skills" />
                    <Button text="Moje projekty" link="projects" />
                    <Button text="Kontakt" link="contact" />
                </P.NavButtonsWrapper>
            </P.NavWrapper>
        </P.LandingPageView>
    );
};

export default LandingPage;
