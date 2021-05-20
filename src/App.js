import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import smoothscroll from "smoothscroll-polyfill";
import "./App.css";

//components
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

function App() {
  // let [firstScroll, setFirstScroll] = useState(false);

  // useEffect(() => {
  //   //Function to smooth scroll to second div on a single scroll and change theme
  //   const changeBack = () => {
  //     if (window.scrollY > 0) {
  //       document
  //         .querySelector(
  //           ".team"                                                                                                                                                                                                                                                             ntainer"
  //         )
  //         .scrollIntoView({ behavior: "smooth" });
  //     }
  //   };

  //   window.addEventListener("scroll", changeBack);
  //   smoothscroll.polyfill(); //kicking smooth scroll polyfill off
  // }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/career" component={ComingSoon} />
        <Redirect to="/notfound" component={ComingSoon} />
      </Switch>
    </Router>
  );
}
const Home = () => (
  <>
    <Homepage />
    <Team className="team" />
    <About />
    <FlipContainer />
    <Services />
    <Testimonials />

    <Contact />
    <Map />
  </>
);
export default App;
