import { render, screen } from "@testing-library/react";
import BurgerMenu from "components/BurgerMenu";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("render BurgerMenu component", () => {
    render(<BurgerMenu />);

    expect(screen.getByTestId(/BurgerButton/i)).toBeInTheDocument();
  });
});
