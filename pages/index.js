import Head from 'next/head'
import styled from 'styled-components'
import NavBar from '../components/navbar'
import Intro from '../components/intro'
import About from '../components/about'

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: 0;

  display: flex;
  flex-direction: column;
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
  opacity: 0.02;
  transform: rotate(45deg);
  z-index: 1000;
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
        <NavBar></NavBar>
        <Intro></Intro>
        <About></About>
      </Main>

      {/* <footer className={styles.footer}>

      </footer> */}
    </div>
  )
}
