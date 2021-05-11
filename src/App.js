import React from "react";

import "./App.css";
import Section from "./Components/Section/Section";
import SmoothScroll from "./Components/SmoothScroll/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <h2>Smooth Scrolling</h2>
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
      <Section flexDirection="row" />
      <Section flexDirection="row-reverse" />
    </SmoothScroll>
  );
}

export default App;
