import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../App";

describe("Header tests", () => {
  test("renders Calculator header", () => {
    render(<App />);
    const linkElement = screen.getByText(/Calculator/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("will find the header element", () => {
    render(<App />);
    const headerElement = screen.getByRole("heading", { name: "Calculator" });
    expect(headerElement).toBeInTheDocument();
  });

  test("will find the h1 tag as the main header element", () => {
    render(<App />);
    const headerElementType = screen.getByText(/Calculator/i);
    expect(headerElementType).toContainHTML("h1");
  });
});

test("2+2=4", () => {
  render(<App />);
  const twoButton = screen.getByText("2");
  const plusButton = screen.getByText("+");
  const equalsButton = screen.getByText("=");
  fireEvent.click(twoButton);
  fireEvent.click(plusButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);
  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("4");
});

test("6/2=3", () => {
  render(<App />);
  const sixButton = screen.getByText("2");
  const divideButton = screen.getByText("/");
  const twoButton = screen.getByText("2");
  const equalsButton = screen.getByText("=");
  fireEvent.click(sixButton);
  fireEvent.click(divideButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);
  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("3");
});

test("3*2=6", () => {
  render(<App />);
  const threeButton = screen.getByText("3");
  const timesButton = screen.getByText("+");
  const twoButton = screen.getByText("2");
  const equalsButton = screen.getByText("=");
  fireEvent.click(threeButton);
  fireEvent.click(timesButton);
  fireEvent.click(twoButton);
  fireEvent.click(equalsButton);
  const display = screen.getByTestId("display");
  expect(display).toHaveTextContent("6");
});
