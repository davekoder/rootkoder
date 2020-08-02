import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/home-page/home-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import ContactPage from "./pages/contact-page/contact-page.component";

import "./App.css";

const App = () => (
  <div className="App">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  </div>
);

export default App;
