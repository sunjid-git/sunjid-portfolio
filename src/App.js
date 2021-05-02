import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Components/Home/Home';
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';
import WorkPage from './Components/WorkPage/WorkPage';
import BlogPage from './Components/BlogPage/BlogPage';
import ContactPage from './Components/ContactPage/ContactPage';

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/works">
          <WorkPage></WorkPage>
        </Route>

        <Route path="/blog">
          <BlogPage></BlogPage>
        </Route>

        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>

        <Route path="*">
          <NoMatch></NoMatch>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
