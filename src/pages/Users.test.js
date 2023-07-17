import { render, screen } from "@testing-library/react";
import Users from 'pages/Users';
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("render Users component", () => {
    render(
      <Users />
    );
    expect(screen.getByText(/Users/i)).toBeInTheDocument();
  });
});
