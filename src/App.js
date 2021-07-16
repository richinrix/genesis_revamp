//Dependancies
import React, { useState } from "react";
import { Switch, Route, Redirect, HashRouter as Hash } from "react-router-dom";
import "./App.css";
import "../src/Components/CSS/component.css";
//Components
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import FlipContainer from "./Components/FlipContainer";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Map from "./Components/Map";
import PreLoader from "./Components/Essentials/PreLoader";
import ComingSoon from "./Components/Essentials/ComingSoon";
// const ComingSoon = React.lazy(() =>
//   import("./Components/Essentials/ComingSoon")
// );

function App() {
  return (
    <Hash>
      <Navbar />
      {window.innerWidth > 767 ? <Sidebar /> : <div></div>}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notfound" component={ComingSoon} />
        <Redirect to="/notfound" component={ComingSoon} />
      </Switch>
    </Hash>
  );
}

const Home = () => {
  //This gets updated when Homepage video has loaded completely
  const [loading, setLoading] = useState(true);

  const toggleLoading = () => {
    setLoading(false);
  };

  //Function that closes navbar on phone when clicked anywhere else
  function uncheckNav() {
    document.getElementById("menu-btn").checked = false;
  }

  return (
    <div onClick={uncheckNav}>
      {/* Shows preloader until the variable "loading" is changed */}
      {loading && <PreLoader />}

      <Homepage toggleLoading={toggleLoading} />
      <About />
      <Services />
      <Testimonials />
      <FlipContainer />
      <Contact />
      <Map />
    </div>
  );
};

export default App;
