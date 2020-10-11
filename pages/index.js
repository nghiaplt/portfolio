import Head from 'next/head'
import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #212121;
  margin: 0;

  display: flex;
  flex-direction: column;

`

const Intro = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-around;
`

const Background = styled.div`
  width: 80%;
  height: 70vh;
  font-size: 10rem;
  color: white;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.05;
  transform: rotate(45deg);
  z-index: 1000;
`

const Des = styled.div`
  font-size: 2rem;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;

  display: flex;
  flex-direction: column;
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

const NavBar = styled.div`
  background-color: #292929;
  font-size: 1.2rem;
  padding: .8em 2.5em;

  justify-content: space-between;
  display: flex;
`

const Logo = styled.div`
  font-family: "Sofia";
  color: white;
`

const NavList = styled.div`
  color: white;
  margin-right: 2.5em;

  display: flex;
  flex-basis: 40%;
  justify-content: space-around;
`

const NavItem = styled.div`

`

const IntroImages = styled.div`
  color: white;
  height: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;
  // flex-basis: 50%;
`

// const RowImages = styled.div`
//   display: flex;
//   height: 50%;
// `

// const FirstImage = styled.div`
//   background-color: #d9d9d9;
//   border-radius: 20px;
//   flex-basis: 50%;
// `

// const SecondImage = styled.div`
//   background-color: #d9d9d9;
//   flex-basis: 50%;
// `

// const Space = styled.div`
//   flex-basis: 50%;
// `

const ImageContainer = styled.div`
  width: 100%;
`

const Image = styled.img`
  max-width: 80%;
  border-radius: 20px;
  mix-blend-mode: luminosity;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background>
          BACKGROUND
      </Background>
      <Main>
        <NavBar>
          <Logo>October, 2020</Logo>
          <NavList>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Contact</NavItem>
          </NavList>
        </NavBar>
        <Intro>
          <Des>
            <Title>The old fashion</Title>
            <SubTitle>This is a subtitle for some reason</SubTitle>
          </Des>
          <IntroImages>
            <ImageContainer>
              <Image src='images/img3.jpg'></Image>
            </ImageContainer>
          </IntroImages>
        </Intro>
      </Main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
