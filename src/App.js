import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Preloader from './components/Preloader'
import styled from "styled-components";
import { tablet } from "./responsive";
import { AppContext } from "./context";

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ${tablet({
    display: "block",
    overflow: "scroll",
  })};
`;

function App() {
  const [location, setLocation] = useState("lagos");
  const [sideData, setSideData] = useState({});
  const [mainData, setMainData] = useState({});

  const emptyObject = (object) => {
    return Object.keys(object).length === 0;
  }

  useEffect(() => {
    try {
      const getMyData = async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=886705b4c1182eb1c69f28eb8c520e20`
        );
        setSideData(response.data);
      };
      getMyData();
    } catch (error) {
      return console.log(error.message);
    }
  }, [location]);

  useEffect(() => {
    try {
      const getData = async () => {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&units=metric&cnt=7&appid=886705b4c1182eb1c69f28eb8c520e20`
        );
        setMainData(response.data);

      };
      getData();
    } catch (error) {
      return console.log(error.message);
    }
  }, [location]);


  const dispatchSearchEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_SEARCH":
        setLocation(location);
        setLocation("");
        break;
      default:
        return;
    }
  };

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        dispatchSearchEvent,
        sideData,
        mainData
      }}
    >
      <Section>
        {emptyObject(sideData) && emptyObject(mainData) ? <Preloader /> : (
          <>
          <Sidebar />
        <Main />
          </>
        )}
      </Section>
    </AppContext.Provider>
  );
}

export default App;
