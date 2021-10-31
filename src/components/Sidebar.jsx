import styled from "styled-components";
import gps from "../assets/gps.svg";
import cloud1 from "../assets/cloud.png";
import cloudDrop from "../assets/cloud-drop.png";
import locationIcon from "../assets/locationIcon.svg";

const Section = styled.section`
width: 28%;
    background: var(--secondary-color);
    color: var(--white-color);
    padding: 2rem 0px;
    overflow: hidden;
`;

const Location = styled.div`
width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
`;

const LocationButton = styled.button`
width: 140px;
    height: 35px;
    background: var(--grey-color);
    box-shadow: rgb(0 0 0 / 25%) 0px 4px 4px;
    border: 1px solid var(--grey-color);
    color: var(--white-color);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
`;
const GPS = styled.div`
background: var(--grey-color);
    width: 25px;
    height: 25px;
    border-radius: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    cursor: pointer;
    color: var(--white-color);
`;
const GPSImage = styled.img`
color: var(--white-color);
`;

const Cloud = styled.div`
position: relative;
    margin: 2rem auto 1.5rem;
    width: 100%;
    height: 230px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Cloud1 = styled.img`
width: 130px;
position: absolute;
left: -60px;
top: 0px;
opacity: 0.1;
`;
const Cloud2 = styled.img`
width: 130px;
position: absolute;
top: 0px;
right: -50px;
opacity: 0.1;
`;
const CloudMain = styled.img`
width: 130px;
`;
const Cloud3 = styled.img`
width: 90px;
    position: absolute;
    right: -10px;
    bottom: 0px;
    opacity: 0.1;
`;
const Cloud4 = styled.img`
width: 133px;
    position: absolute;
    left: -50px;
    bottom: 0px;
    opacity: 0.1;
`;
const WeatherDetailsContainer = styled.div`
width: 50%;
    margin: auto;
    text-align: center;
`;
const WeatherDetailTitle = styled.h1`
font-size: 5rem;
`;
const WeatherDetailSpan = styled.span`
font-size: 2rem;
    font-weight: 200;
`;
const WeatherDetailDescription = styled.h3`
font-size: 2rem;
    font-weight: 400;
    margin: 2rem 0px;
`;
const WeatherDetail = styled.p`
font-size: 0.8rem;
    margin-bottom: 1rem;
    opacity: 0.7;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const LocationIcon = styled.img`
color: var(--white-color);
`;

const Sidebar = () => {
  return (
    <Section>
      <Location>
        <LocationButton>Search for places</LocationButton>
        <GPS>
          <GPSImage src={gps} alt="GPS Image" />
        </GPS>
      </Location>
      <Cloud>
        <Cloud1 src={cloud1} />
        <Cloud2 src={cloud1} />
        <CloudMain src={cloudDrop} />
        <Cloud3 src={cloud1} />
        <Cloud4 src={cloud1} />
      </Cloud>
      <WeatherDetailsContainer>
        <WeatherDetailTitle>
          18
          <WeatherDetailSpan>℃</WeatherDetailSpan>
        </WeatherDetailTitle>
        <WeatherDetailDescription>Light Rain</WeatherDetailDescription>
        <WeatherDetail>Today, Sunday 31st October, 2021</WeatherDetail>
        <WeatherDetail>
          <LocationIcon src={locationIcon} /> Lagos, Nigeria
        </WeatherDetail>
      </WeatherDetailsContainer>
    </Section>
  );
};

export default Sidebar;
