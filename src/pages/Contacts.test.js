import { render, screen } from "@testing-library/react";
import Contacts from 'pages/Contacts';
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("render Contacts component", () => {
    render(
      <Contacts />
    );
    expect(screen.getByText(/Contacts/i)).toBeInTheDocument();
  });
});
