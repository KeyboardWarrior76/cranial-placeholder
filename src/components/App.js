import blurredImageUrl from '../assets/images/backgrundBlurredUrl';
import fullImageUrl from '../assets/images/backgrundFullUrl'; 
import ProgressiveImage from 'react-progressive-image';
import styled from '@emotion/styled';
import Logo from '../assets/images/full-text-logo-light.svg';

function App() {
  return (
    <AppContainer 
      src={fullImageUrl}
      placeholder={blurredImageUrl}>
      {src => (
        <ImageBackground backgroundUrl={src}>
          <TitleContainer>
            <TextLogo src={Logo} alt='Cranial Learning Text Logo' />
            <Tagline>coming soon</Tagline>
          </TitleContainer>
        </ImageBackground>
      )}
    </AppContainer>
  );
}

const AppContainer = styled(ProgressiveImage)``;

const ImageBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  height: 100vh;
  width: 100vw;

  background-image: url(${props => props.backgroundUrl});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 7px 30px;
  border-left: 12px solid white;

  @media(max-width: 600px) {
    font-size: 8px;
  }
`

const TextLogo = styled.img`
  width: 20vw;
  min-width: 225px;
`


const Tagline = styled.p`
  align-self: flex-end;
  padding-bottom: 3px;
  padding-left: 5px;
  
  font-family: Canno;
  font-size: 1em;
  letter-spacing: 0.5em;
  
  color: white;
  background-color: #333333;
`

export default App;
