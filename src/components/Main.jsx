import { useState, useEffect, useContext } from "react";
import dateFormat from "dateformat";
import { AppContext } from "../context";
import styled from "styled-components";
import cloud from "../assets/cloud.png";
import cloudDrop from "../assets/cloud-drop.png";
import sunny from "../assets/sunny.png";
import { large, tablet, mobile } from "../responsive";

const Section = styled.section`
  width: 72%;
  padding: 2rem 5rem 5rem 6rem;
  overflow-y: scroll;
  color: var(--white-color);
  background: var(--primary-color);
  ${tablet({
    width: "68%",
    padding: "2rem 2.2rem 4rem",
  })};
  ${mobile({
    width: "100%",
  })}
`;
const ConversionContainer = styled.div`
  width: 100%;
`;
const ConversionIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
const ConversionIcon = styled.div`
  background: var(--white-color);
  width: 25px;
  height: 25px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--secondary-color);
  margin-left: 0.5rem;
`;
const ConversionMeasure = styled.p`
  font-size: 0.88rem;
`;
const Cards = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15%, 1fr));
  gap: 1.5rem;
  grid-auto-flow: dense;
  column-count: 2;
  ${large({
    gridTemplateColumns: "repeat(auto-fill, minmax(25%, 1fr))",
  })};
  ${tablet({
    gridTemplateColumns: "repeat(auto-fill, minmax(45%, 1fr))",
  })}
`;
const Card = styled.div`
  width: 100%;
  height: 100%;
  background: var(--secondary-color);
  padding: 1rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
`;
const CardParagraph = styled.p`
  font-size: 0.95rem;
  font-size: ${(props) => props.second === "true" && "0.65rem"};
`;
const CardImage = styled.img`
  width: 70px;
  height: 70px;
  display: block;
  margin: 0.7rem auto;
  object-fit: contain;
`;
const CardDegree = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TodayContainer = styled.div`
  width: 100%;
  margin-top: 7%;
`;
const TodayTitle = styled.h3``;
const TodayCards = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
  gap: 2rem;
  grid-auto-flow: dense;
  column-count: 2;
`;
const TodayCard = styled.div`
  width: 100%;
  background: var(--secondary-color);
  padding: 1.4rem;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-direction: column;
  text-align: center;
`;
const TodayStatus = styled.p`
  font-size: 0.95rem;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;
const TodaySpeed = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
`;
const TodaySpeedSpan = styled.span`
  font-size: 1.8rem;
`;
const ProgressBar = styled.div`
  width: 55%;
  margin: auto;
`;
const Reader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const ReaderParagraph = styled.p`
  margin: 0px;
  font-size: 0.7rem;
`;
const Progress = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 50px;
  background: var(--grey-color);
  margin: 3px 0px;
  overflow: hidden;
`;
const UnitParagraph = styled.p`
  margin: 0px;
  font-size: 0.7rem;
`;

const Unit = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Main = () => {
  const { mainData } = useContext(AppContext);
  const [data, setData] = useState(mainData);
  const now = new Date();

  useEffect(() => {
    return setData(mainData)
  }, [mainData])

  const emptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const ProgressInner = styled.div`
  width: ${(props) =>
    props.progress === "true" ? data.list[0].humidity.toFixed(0) : null}%;
    height: 100%;
    background: var(--yellow-color);
  `;

  return (
    <Section>
      <ConversionContainer>
        <ConversionIcons>
          <ConversionIcon>
            <ConversionMeasure>℃</ConversionMeasure>
          </ConversionIcon>
          <ConversionIcon>
            <ConversionMeasure>℉</ConversionMeasure>
          </ConversionIcon>
        </ConversionIcons>

        <Cards>
          {data.list?.map((item, index) => {
            return (
              <Card key={index}>
                <CardParagraph>
                  {days[new Date(item.dt * 1000).getDate()] === dateFormat(now, "dddd") ? "Tomorrow" : days[new Date(item.dt * 1000).getDate()] === undefined ? "Subsequent Day" : days[new Date(item.dt * 1000).getDate()]}
                </CardParagraph>
                <CardImage
                  src={
                    item.weather[0]?.main === "Rain"
                      ? cloudDrop
                      : item.weather[0]?.main === "Clouds"
                      ? cloud
                      : sunny
                  }
                />
                <CardDegree>
                  <CardParagraph>{item.temp.day.toFixed(0)}℃</CardParagraph>
                  <CardParagraph second="true">
                    {item?.temp.min.toFixed(0)}℃
                  </CardParagraph>
                </CardDegree>
              </Card>
            );
          }).filter((value) => value !== undefined)}
        </Cards>

        <TodayContainer>
          <TodayTitle>Today's Highlights</TodayTitle>
          {emptyObject(data) ? null : (
            <TodayCards>
              <TodayCard>
              <TodayStatus>Wind Status</TodayStatus>
              <TodaySpeed>
                {data.list[0].speed.toFixed(0)}
                <TodaySpeedSpan>mph</TodaySpeedSpan>
              </TodaySpeed>
            </TodayCard>

            <TodayCard>
              <TodayStatus>Humidity</TodayStatus>
              <TodaySpeed>
                {data.list[0].humidity.toFixed(0)}
                <TodaySpeedSpan>%</TodaySpeedSpan>
              </TodaySpeed>
              <ProgressBar>
                <Reader>
                  <ReaderParagraph>0</ReaderParagraph>
                  <ReaderParagraph>50</ReaderParagraph>
                  <ReaderParagraph>100</ReaderParagraph>
                </Reader>
                <Progress>
                  <ProgressInner progress="true"></ProgressInner>
                </Progress>
                <Unit>
                  <UnitParagraph>%</UnitParagraph>
                </Unit>
              </ProgressBar>
            </TodayCard>

            <TodayCard>
              <TodayStatus>Visibility</TodayStatus>
              <TodaySpeed>
                {data.list[0].gust.toFixed(0)}
                <TodaySpeedSpan>miles</TodaySpeedSpan>
              </TodaySpeed>
            </TodayCard>

            <TodayCard>
              <TodayStatus>Air Pressure</TodayStatus>
              <TodaySpeed>
                {data.list[0].pressure.toFixed(0)}
                <TodaySpeedSpan>mb</TodaySpeedSpan>
              </TodaySpeed>
            </TodayCard>
            </TodayCards>
          )}
        </TodayContainer>
      </ConversionContainer>
    </Section>
  );
};

export default Main;
