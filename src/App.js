
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Works from './Components/Works/Works';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Router path="/about">
          <About></About>
        </Router>

        <Router path="/works">
          <Works></Works>
        </Router>

        <Router path="/blog">
          <Blog></Blog>
        </Router>

        <Router path="/contact">
          <Contact></Contact>
        </Router>

        <Router path="*">
          <NoMatch></NoMatch>
        </Router>

      </Switch>
    </Router>
  );
}

export default App;
