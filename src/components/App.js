import blurredImageUrl from '../assets/images/backgrundBlurredUrl';
import fullImageUrl from '../assets/images/backgrundFullUrl'; 
import ProgressiveImage from 'react-progressive-image';
import styled from '@emotion/styled';

function App() {
  return (
    <AppContainer 
      src={fullImageUrl}
      placeholder={blurredImageUrl}>
      {src => (
        <ImageBackground backgroundUrl={src}>
          <WhiteBorder>
            <TitleContainer>
              <Title>CRANIAL</Title>
              <Title>LEARNING</Title>
              <Tagline>coming soon</Tagline>
            </TitleContainer>
          </WhiteBorder>
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

const WhiteBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 115px);
  width: calc(100vw - 115px);
  border: 1px solid white;
  
  @media(max-width: 1100px) {
    border-left: transparent;
    border-right: transparent;
  }
`

const TitleContainer = styled.div`
  border-left: 12px solid white;
  padding: 5px 0 12px 30px;

  @media(max-width: 600px) {
    font-size: 8px;
  }
`

const Title = styled.h1`
  color: white;
  font-family: Canno;
  font-size: 3em;
  letter-spacing: 0.3em;
  word-spacing: 1.5em;
`

const Tagline = styled.p`
  color: white;
  font-family: Canno;
  font-size: 1em;
  letter-spacing: 0.5em;
`

export default App;
