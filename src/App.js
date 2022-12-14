import "./styles/global.css";
import Window from "./components/window";
import { faker } from "@faker-js/faker";
import React from "react";
import Logo from "./components/logo/logo";

export default function App() {
  const items = new Array(200000).fill().map((_value, index) => ({
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));
  return (
    <>
      <div className="App">
        <Logo />
        <Window rowHeight={60}>
          {items?.map((item) => (
            <li className="rowContainer" key={item?.id}>
              <span className="row">{item?.id + 1}</span>
              <span className="row">{item?.firstName}</span>
              <span className="row">{item?.lastName}</span>
            </li>
          ))}
        </Window>
      </div>
    </>
  );
}
