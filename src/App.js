import React, { useState, useEffect } from "react";
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
import ScrollToTop from "./Components/Essentials/ScrollToTop";

function App() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <Hash>
      <Navbar />
      <Sidebar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notfound" component={ComingSoon} />
        <Redirect to="/notfound" component={ComingSoon} />
      </Switch>
    </Hash>
  );
}
const Home = () => {
  const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <PreLoader />}
      <Homepage toggleLoading={toggleLoading} />

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
