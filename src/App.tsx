import { Routes, Route } from "react-router-dom";
import Contacts from "pages/Contacts";
import Users from "pages/Users";
import styled from "styled-components";
import { Colors } from "enums/colors";
import { DeviceProvider } from "context/deviceContext";
import { Suspense, lazy } from "react";
import { Loading } from "components/Loading";
import Header from "components/Header";

const Home = lazy(() => import("pages/Home"));

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
          <Suspense fallback={<Loading type={"spinningBubbles"} color={Colors.VIOLET} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Suspense>
        </StyledMain>
      </DeviceProvider>
    </Page>
  );
}

export default App;
