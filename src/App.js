import React, { useState, useEffect, useRef } from "react";
import { faker } from "@faker-js/faker";

import "./styles/global.css";

import SomeItem from "./components/someItem/someItem";
import Header from "./components/header/header";
import ScrollButton from "./components/button/button";
import Logo from "./components/logo/logo";

function App() {
  const [scrollVisible, setScrollVisible] = useState(false);
  const table = useRef(null);

  const items = new Array(50000).fill().map((_value, index) => ({
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  }));

  const toggleScrollButton = (event) => {
    if (event.target.scrollTop > 200) {
      setScrollVisible(true);
    } else {
      setScrollVisible(false);
    }
  };

  useEffect(() => {
    table.current.addEventListener("scroll", toggleScrollButton);

    // return table.current.removeEventListener("scroll", toggleScrollButton);
  }, []);

  const scrollToTop = () => {
    table.current.scroll({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Logo />
      <div className="container" ref={table}>
        <Header />
        {items.map((item, index) => (
          <SomeItem containerSelector=".container" item={item} key={index} />
        ))}
      </div>
      <ScrollButton scrollToTop={scrollToTop} scrollVisible={scrollVisible} />
    </>
  );
}

export default App;
