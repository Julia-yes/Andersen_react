import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Contacts from "pages/Contacts";
import Header from "components/Header";
import Users from "pages/Users";
import styled from "styled-components";
import { Colors } from "enums/colors";
import { DeviceProvider } from "context/deviceContext";
import { DataProvider } from "context/dataContext";

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
      <DeviceProvider>
        <Header />
        <StyledMain>
          <Routes>
            <Route
              path="/"
              element={
                <DataProvider>
                  <Home />
                </DataProvider>
              }
            />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </StyledMain>
      </DeviceProvider>
    </Page>
  );
}

export default App;
