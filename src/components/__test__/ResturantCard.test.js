import { render, screen } from "@testing-library/react";
import { RestroCard } from "../RestroCard";
import '@testing-library/jest-dom';
import MOCK_DATA from "../mockData/resturantCardDta.json";
it ("should render restuarnt card component with props data",()=>{
   render(<RestroCard resData={MOCK_DATA.info}/>);
   const name=screen.getByText("Pizza Hut");
   expect(name).toBeInTheDocument();
})