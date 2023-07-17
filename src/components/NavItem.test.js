import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavItem from "components/NavItem";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("check that active link on the page have class name 'active'", () => {
    render(
      <BrowserRouter>
        <NavItem path={'/'} title={'Home'}/>
      </BrowserRouter>
    );
    const link = screen.getByTestId('Link');
    expect(link.classList.contains('active')).toBe(true);
    expect(link.classList.contains('pending')).toBe(false);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
