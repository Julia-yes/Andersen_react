import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("render App component", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(screen.getByText(/Sign/i)).toBeInTheDocument();
  });
});
