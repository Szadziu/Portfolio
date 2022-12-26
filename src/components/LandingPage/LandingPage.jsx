import Button from '../generics/Button';
import * as P from './landingPage.parts.js';
import personalPhotoImage from '../../assets/personalPhoto.jpg';
import { useWindowSize } from '../../hooks/useWindowSize';

const LandingPage = () => {
    const { height } = useWindowSize();

    const downloadFile = (fileUrl) => {
        let link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileUrl.substr(fileUrl.lastIndexOf('/') + 1);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    <Button text="Blog" link="#" />
                    <Button
                        text="CV"
                        link="#"
                        // onClick={() => downloadFile('/src/files/Maciej_Mikolajczak_CV_pl.pdf')}
                    />
                    {/* <Button text="CV" link="#" download /> */}
                    <Button text="Kontakt" link="contact" />
                </P.NavButtonsWrapper>
            </P.NavWrapper>
        </P.LandingPageView>
    );
};

export default LandingPage;
