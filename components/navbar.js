import styled from 'styled-components'

const NavbarContainer = styled.div`
    background-color: #292929;
    font-size: 1.2rem;
    padding: .8em 2.5em;
    height: auto;

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
    flex-basis: 50%;
    justify-content: space-around;

    @media (max-width: 765px) {
        flex-basis: 65%;
    }
`

const NavItem = styled.div`

`

const Navbar = () => {
    return (
        <NavbarContainer>
          <Logo>October, 2020</Logo>
          <NavList>
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Skills</NavItem>
            <NavItem>Contact</NavItem>
          </NavList>
        </NavbarContainer>
    )
}

export default Navbar