import { render } from "@testing-library/react"
import {Header} from "../Header";
import { screen } from "@testing-library/dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../utils/appStore";
import '@testing-library/jest-dom';
it ("should render the header component correctly using login button",()=>{
 
  render( 
  <BrowserRouter>
  <Provider store={appStore}>
  <Header/>
  </Provider>
  </BrowserRouter>);
  //query by text
  const loginButton = screen.getByRole("button", { name: "Login" });
  //assertion
  expect(loginButton).toBeInTheDocument();
});