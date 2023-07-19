import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Header from "components/Header";
import Users from "pages/Users";
import styled from "styled-components";
import { Colors } from "enums/colors";
import { DataProvider } from "context/deviceContext";

const Page = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const StyledMain = styled.section`
  flex-grow: 1;
  text-align: center;
  color: ${Colors.BLUE};
  background-color: ${Colors.BLUE_LIGHT};
`;

function App() {
  return (
    <Page>
      <DataProvider>
        <Header />
        <StyledMain>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </StyledMain>
      </DataProvider>
    </Page>
  );
}

export default App;
