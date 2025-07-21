import MOCK_DATA from "../mockData/mock_Res_menu.json";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react";  
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({ // ✅ add return
    json: () => Promise.resolve(MOCK_DATA)
  });
});

it ("should load resturant menu coponent",async()=>{
   await act(async()=>{
    render(
      <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        <ResturantMenu />
        </Provider>
      </BrowserRouter>);
      const accordianHeader=screen.getByText("Shravan Special(6)");
      fireEvent.click(accordianHeader);
      expect(screen.getAllByTestId("food-items").length).toBe(6);
    });
});