import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";

//components
// test
import Test from "./Components/Test";
//
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Team from "./Components/Team";
import About from "./Components/About";
import FlipContainer from "./Components/FlipContainer";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import ComingSoon from "./Components/Essentials/ComingSoon";
import Services from "./Components/Services";
import Map from "./Components/Map";
import HomeParticles from "./Components/Essentials/HomeParticles";

function App() {
  let [firstScroll, setFirstScroll] = useState(false);
  let [currentScroll, setCurrentScroll] = useState(0);
  const pageIds = {
    0: "homeContainer",
    1: "teamCall",
    2: "aboutContainer",
    3: "imageFlipContainer",
    4: "services",
    5: "testimonials",
    6: "contactContainer",
    7: "mapContainer",
  };

  useEffect(() => {}, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notfound" component={ComingSoon} />
        <Redirect to="/notfound" component={ComingSoon} />
      </Switch>
    </Router>
  );
}
const Home = () => (
  <div className="scroll-snap-container">
    <Homepage></Homepage>
    <Team />
    <About />
    <Contact />
    <Map />
    <FlipContainer />
    <Services />
    <Testimonials />
  </div>
);
export default App;
