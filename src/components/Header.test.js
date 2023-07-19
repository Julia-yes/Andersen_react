import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "components/Header";
import "@testing-library/jest-dom/extend-expect";
import { DeviceContext } from "context/deviceContext";
import { DeviceType } from "enums/deviceType";

describe("App", () => {
  it("render Header component", () => {
    const device = "phone";
    render(
      <BrowserRouter>
        <DeviceContext.Provider value={{ device }}>
          <Header />
        </DeviceContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Sign/i)).toBeInTheDocument();
  });
  it("check login and logout mechanism", () => {
    const device = "phone";
    render(
      <BrowserRouter>
        <DeviceContext.Provider value={{ device }}>
          <Header />
        </DeviceContext.Provider>
      </BrowserRouter>
    );
    expect(screen.queryByText(/up/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
    const button = screen.getByText(/Sign/i);
    fireEvent.click(button);
    expect(screen.getByText(/up/i)).toBeInTheDocument();
    const buttonLogin = screen.getByText(/up/i);
    fireEvent.click(buttonLogin);
    expect(screen.queryByText(/up/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText(/out/i)).toBeInTheDocument();
    const buttonLogout = screen.getByText(/out/i);
    fireEvent.click(buttonLogout);
    expect(screen.queryByText(/out/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/up/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Login/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Sign/i)).toBeInTheDocument();
  });

  it("check that pop-up appears after click on burger button", () => {
    const device = DeviceType.PHONE;
    global.innerWidth = 300; 
    render(
      <BrowserRouter>
        <DeviceContext.Provider value={{ device }}>
          <Header />
        </DeviceContext.Provider>
      </BrowserRouter>
    );
    const button = screen.getByTestId('BurgerButton');
    expect(screen.queryByTestId("PopUp")).not.toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId("PopUp")).toBeInTheDocument();
  });
});
