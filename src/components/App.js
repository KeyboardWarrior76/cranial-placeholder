import styled from '@emotion/styled';
import Logo from '../assets/images/logo.svg';

function App() {
  return (
    <AppContainer url={Logo}>
      <TitleContainer>
        <LogoCenter>
          <SVGLogo src={Logo} alt='Cranial Learning Text Logo' />
          <LogoText>CRANIAL<br />LEARNING</LogoText>
        </LogoCenter>
        <LearnMoreText>
          Want to learn more about this project? Send A message to
          <CranialEmail href="mailto: admin@cranial.dev" >
            {" admin@cranial.dev"}
          </CranialEmail>
        </LearnMoreText>
      </TitleContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &:before {
    content: '""';
    position: absolute;
    height: 1200px;
    width: 1200px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    
    filter: grayscale(100%) brightness(6%);
    -webkit-filter: grayscale(100%) brightness(6%);
    -moz-filter: grayscale(100%) brightness(6%);

    @media(max-width:650px) {
      height: 800px;
      width: 800px;
    }
  }
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media(max-width: 600px) {
    font-size: 8px;
  }
`

const LogoCenter = styled.div`
  display: flex;
`

const SVGLogo = styled.img`
  width: 8rem;

  @media(max-width:650px) {
    width: 4rem;
  }
`

const LogoText = styled.h1`
  align-self: center;
  color: white;
  font-family: BraveEightyOne;
  font-size: 1.75rem;
  font-weight: normal;
  letter-spacing: 0;
  padding-left: 2rem;


  @media(max-width:650px) {
    font-size: 1rem;
    padding-left: 1rem;
  }
`

const LearnMoreText = styled.p`
  color: white;
  font-size: 0.8rem;
  padding-top: 4rem;

  @media(max-width:650px) {
    font-size: 0.5rem;
  }
`

const CranialEmail = styled.a`
  color: #00A5BC;
  text-decoration: none;
  font-weight: bold;
`

export default App;
