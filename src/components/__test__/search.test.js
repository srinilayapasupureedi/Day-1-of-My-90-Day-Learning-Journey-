import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import MOCK_DATA from "../mockData/ResLis_Mock.json";
import { BrowserRouter } from "react-router-dom";
import { Body } from "../Body";
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
  });
});

it("should search restaurant list for 'burger' text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.findByTestId("search-btn");
  const searchInput =screen.findByTestId("search-input");

  // Initial load check (optional)
  const cardsBeforeSearch =screen.findAllByTestId("res-card");
  expect(cardsBeforeSearch.length).toBeGreaterThan(3); // Adjust based on your mock

  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  expect(screen.getAllByTestId("res-card").length).toBe(3);
});