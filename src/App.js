import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter as Hash,
} from "react-router-dom";
import "./App.css";
import "../src/Components/CSS/component.css";

//components
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import FlipContainer from "./Components/FlipContainer";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import ComingSoon from "./Components/Essentials/ComingSoon";
import Services from "./Components/Services";
import Map from "./Components/Map";
import PreLoader from "./Components/Essentials/PreLoader";

function App() {
  return (
    <Hash>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notfoundr" component={ComingSoon} />
        <Redirect to="/notfoundr" component={ComingSoon} />
      </Switch>
    </Hash>
  );
}
const Home = () => {
  const [loading, setLoading] = useState(false);

  setTimeout(() => {
    setLoading(true);
  }, 2000);

  return !loading ? (
    <PreLoader />
  ) : (
    <>
      <Homepage />
      <About />
      <Services />
      <Testimonials />
      <FlipContainer />

      <Contact />
      <Map />
    </>
  );
};
export default App;
