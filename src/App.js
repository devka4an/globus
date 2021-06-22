import React from "react";
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { createBrowserHistory } from "history";

import Main from "./pages/Main";
import About from "./pages/About";
import Map from "./pages/Map";
import Store from "./pages/Store";
import Promotions from "./pages/Promotions";
import FoodCort from "./pages/FoodCort";
import Tenants from "./pages/Tenants";
import Contacts from "./pages/Contacts";
import Gallery from "./pages/Gallery";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <div className="Page">
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/map">
              <Map />
            </Route>
            <Route exact path="/store">
              <Store />
            </Route>
            <Route exact path="/promotions">
              <Promotions />
            </Route>
            <Route exact path="/food-cort">
              <FoodCort />
            </Route>
            <Route exact path="/tenants">
              <Tenants />
            </Route>
            <Route exact path="/contacts">
              <Contacts />
            </Route>
            <Route exact path="/gallery">
              <Gallery />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
