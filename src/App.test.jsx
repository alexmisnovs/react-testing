import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("App loads..", () => {
    render(<App />);
  });
});
