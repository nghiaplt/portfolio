import styled from 'styled-components'

const AboutContainer = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    font-size: 2rem;
    padding: 3em 4em;

    justify-content: center;
    align-items: center;
    background-color: #b0b0b0;
    font-style: italic;
    color: #303030;  
`

const About = () => {
    return (
        <AboutContainer>
            Jack’s Bar and Kitchen is the brainchild of Ryan 
            and John McElhinney. We are located at 96 Isabella Street 
            (behind Southwark Tube) SE1 8DD. The original Jack’s was opened in Ireland in 1970 by 
            their father Jack (now sunning himself in Spain) so the boys decided to pay tribute to 
            their father by re-opening the original almost forty years on. 
            
            Jack's is a bar for birthdays, catching up with friends, lunch on our patio in the sunshine, craft beer, cocktails and delicious Thai food.
        </AboutContainer>
    )
}

export default About