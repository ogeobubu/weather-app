import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styled from "styled-components";

const Section = styled.section`
display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
`;

function App() {
  return (
    <Section>
      <Sidebar />
      <Main />
    </Section>
  );
}

export default App;
