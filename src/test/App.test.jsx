import {render, screen} from "@testing-library/react";
import App from "../App";

test("renders Hello, Jest!", () => {
  render(<App />);
  expect(screen.getByText("Hello")).toBeInTheDocument();
});
