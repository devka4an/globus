import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from "./pages/Main";
import About from "./pages/About";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
