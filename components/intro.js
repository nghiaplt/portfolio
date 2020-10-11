import styled from 'styled-components'

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  padding: 5em 0;
  
  background-color: #212121;
  justify-content: space-around;

  @media (max-width: 765px) {
    flex-direction: column;
  }
`

const Des = styled.div`
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  display: flex;
  flex-direction: column;

  @media (max-width: 765px) {
    padding-top: 1em;
    padding-bottom: 3em;
  }
`

const Title = styled.div`
  font-size: 6rem;
  color: white;
`

const SubTitle = styled.div`
  margin-top: 1em;
  font-size: 2rem;
  color: #c9c9c9;
`

const IntroImages = styled.div`
  color: white;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
`

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  max-width: 50%;
  border-radius: 20px;
  mix-blend-mode: luminosity;
`


const Intro = () => {

    return (
        <IntroContainer>
          <Des>
            <Title>The old fashion</Title>
            <SubTitle>This is a subtitle for some reason</SubTitle>
          </Des>
          <IntroImages>
            <ImageContainer>
                <Image src='images/img3.jpg'></Image>
            </ImageContainer>
          </IntroImages>
        </IntroContainer>
    )
}

export default Intro