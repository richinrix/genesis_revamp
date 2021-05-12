import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import SmoothScroll from "./Components/Essentials/SmoothScroll";
//components
import FlipContainer from "./Components/FlipContainer";
import Testimonials from "./Components/Testimonials";
import ComingSoon from "./Components/ComingSoon";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route to="/career" component={ComingSoon} />
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
