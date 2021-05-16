import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// others
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
//components
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import FlipContainer from "./Components/FlipContainer";
import Testimonials from "./Components/Testimonials";
import ComingSoon from "./Components/Essentials/ComingSoon";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/career" component={ComingSoon} />
      </Switch>
    </Router>
  );
}
const Home = () => (
  <>
    <FlipContainer />
    <Testimonials />
  </>
);
export default App;
