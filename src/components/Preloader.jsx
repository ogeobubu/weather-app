import styled from 'styled-components'

const Section = styled.div`
width: 250px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Druk, arial, sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    color: rgb(141, 111, 87);
    letter-spacing: 0.2rem;

    &::before {
        top: 0;
        content: "";
        display: block;
    width: 15px;
    height: 15px;
    background: rgb(255, 255, 255);
    position: absolute;
    animation: 0.85s ease-in-out 0s infinite alternate none running loading;
    }

    &::after {
        content: "";
    display: block;
    width: 15px;
    height: 15px;
    background: rgb(255, 255, 255);
    position: absolute;
    animation: 0.85s ease-in-out 0s infinite alternate none running loading;
    }
`

const Preloader = () => {
    return (
        <Section>
            Loading...
        </Section>
    )
}

export default Preloader