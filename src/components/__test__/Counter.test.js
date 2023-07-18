import { render, fireEvent, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Counter from "../Counter";
describe("Counter", () => {
  test("Should increment Counter", () => {
    //render component in the virtual dom
    render(<Counter />);
    //select the elements to interact
    const counter = screen.getByTestId("counter");
    const increment = screen.getByTestId("increment");
    //iteract with elements
    fireEvent.click(increment);
    //assertions
    expect(counter).toHaveTextContent("2");
  });
  test("Should decrement Counter", () => {
    render(<Counter />);
    const counter = screen.getByTestId("counter");
    const decrement = screen.getByTestId("decrement");
    fireEvent.click(decrement);
    expect(counter).toHaveTextContent("0");
  });
});

describe("Counter Snapshot", () => {
  it("should matches DOm shapshot", () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
