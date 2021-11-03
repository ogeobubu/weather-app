import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import dateFormat from "dateformat";
import { AppContext } from "../context";
import gps from "../assets/gps.svg";
import cloud1 from "../assets/cloud.png";
import cloudDrop from "../assets/cloud-drop.png";
import sunny from "../assets/sunny.png";
import locationIcon from "../assets/locationIcon.svg";
import close from "../assets/close.svg";
import { large, tablet, mobile, smallMobile } from "../responsive";

const Section = styled.section`
  width: 28%;
  background: var(--secondary-color);
  color: var(--white-color);
  padding: 2rem 0px;
  overflow: hidden;
  ${tablet({
    width: "100%",
  })};
`;

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
`;
const Slides = styled.div`
  position: fixed;
  top: 0px;
  left: ${(props) => (props.show === "show" ? "0px" : "-100%")};
  z-index: 25;
  width: 380px;
  height: 100vh;
  background: var(--secondary-color);
  padding: 1.2rem 2rem 2rem;
  transition: all 0.3s ease-in-out 0s;
  ${tablet({
    width: "63%",
  })};
  ${smallMobile({
    width: "100%",
  })};
`;
const SlidesSpan = styled.span``;
const CloseIcon = styled.img`
  cursor: pointer;
  position: absolute;
  top: 2.5%;
  right: 6.5%;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
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
  text-transform: capitalize;
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
const SlidesContainer = styled.div`
  height: 100%;
  color: var(--white-color);
`;
const SlideContainer = styled.div`
  margin-top: 3rem;
`;

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Search = styled.input`
  display: block;
  width: 70%;
  height: 38px;
  background: none;
  border: 1.2px solid var(--white-color);
  color: var(--grey-color);
  padding: 0.3rem 0.8rem;
  font-weight: bold;
`;
const Button = styled.button`
  display: block;
  width: 28%;
  height: 38px;
  background: var(--blue-color);
  border: 1px solid var(--blue-color);
  color: var(--white-color);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
`;
const LocationItems = styled.ul`
  margin-top: 2.5rem;
  list-style: none;
`;
const LocationItem = styled.li`
  width: 100%;
  height: 39px;
  margin-top: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
  padding: 0.5rem;
  border: 1px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Sidebar = ({ apiKey }) => {
  const { setLocation, dispatchSearchEvent, sideData } = useContext(AppContext);
  const now = new Date();
  const [data, setData] = useState({});
  const [open, setOpen] = useState("");

  useEffect(() => {
    return setData(sideData)
  }, [sideData])

  const emptyObject = (object) => {
    return Object.keys(object).length === 0
  }

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchSearchEvent("ADD_SEARCH", e.target.value);
    setOpen("");
  };

  return (
    <Section>
      {emptyObject(data) ? null : (
        <>
        <SliderContainer>
        <div className={open ? "overlay" : null}></div>
        <Slides show={open ? "show" : null}>
          <SlidesSpan>
            <CloseIcon
              onClick={() => {
                setOpen("");
              }}
              src={close}
            />
          </SlidesSpan>
          <SlidesContainer>
            <div>
              <SlideContainer>
                <SearchContainer>
                  <form onSubmit={handleSubmit}>
                    <Search
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Search Location"
                    />
                    <Button type="submit">Search</Button>
                  </form>
                </SearchContainer>
                <LocationItems>
                  <LocationItem>Lagos</LocationItem>
                  <LocationItem>Paris</LocationItem>
                  <LocationItem>Dubai</LocationItem>
                </LocationItems>
              </SlideContainer>
            </div>
          </SlidesContainer>
        </Slides>
      </SliderContainer>
      <Location>
        <LocationButton
          onClick={() => {
            setOpen("open");
          }}
        >
          Search for places
        </LocationButton>
        <GPS>
          <GPSImage src={gps} alt="GPS Image" />
        </GPS>
      </Location>
      <Cloud>
        <Cloud1 src={cloud1} />
        <Cloud2 src={cloud1} />
        <CloudMain
          src={
            data?.weather[0].main === "Rain"
              ? cloudDrop
              : data?.weather[0].main === "Clouds"
              ? cloud1
              : sunny
          }
        />
        <Cloud3 src={cloud1} />
        <Cloud4 src={cloud1} />
      </Cloud>
      <WeatherDetailsContainer>
        <WeatherDetailTitle>
          {kelvinToFarenheit(data?.main.temp)}
          <WeatherDetailSpan>℃</WeatherDetailSpan>
        </WeatherDetailTitle>
        <WeatherDetailDescription>
          {data?.weather[0].description}
        </WeatherDetailDescription>
        <WeatherDetail>{dateFormat(now, "dddd, mmmm dS, yyyy")}</WeatherDetail>
        <WeatherDetail>
          <LocationIcon src={locationIcon} /> {data?.name}
        </WeatherDetail>
      </WeatherDetailsContainer>
        </>
      )}
    </Section>
  );
};

export default Sidebar;
