import { render } from "@testing-library/react"
import Contact from "../Contact";
import { screen } from "@testing-library/dom";
import '@testing-library/jest-dom';
describe("contact page testCases",()=>{
it("should load contact us page", () => {
  render(<Contact />); 
  //query by text
  const heading = screen.getByRole("heading");
  //assertion
  expect(heading).toBeInTheDocument();
});
it("should button inside the contact page", () => {
  render(<Contact />); 
  //query by text
  const button = screen.getByRole("button");
  //assertion
  expect(button).toBeInTheDocument();
});
test("should 2 input button inside contact us page", () => {
  render(<Contact />); 
  //query by text
  const inputs = screen.getAllByRole("textbox");
  //assertion
  expect(inputs.length).toBe(3);
});
});
