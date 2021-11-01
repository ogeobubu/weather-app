import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styled from "styled-components";
import { tablet } from "./responsive";

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
  const apiKey = "e20d94e466a99718765e9e505fb3692b";
  return (
    <Section>
      <Sidebar apiKey={apiKey} />
      <Main />
    </Section>
  );
}

export default App;
