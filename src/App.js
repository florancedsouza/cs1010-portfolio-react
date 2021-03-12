import React from "react";
// import bootstrap CSS file
// import "bootstrap/dist/css/bootstrap.min.css";

// import reuired pkg for Router
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import custom style sheet
import "./App.css"

// import component
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Default from "./components/Default";
import Login from "./components/Login";
import ProtectedRoute from './components/ProtectedRoute';
import ListOfEntries from './components/ListOfEntries';
import Signup from './components/Signup';

import { ContextProvider } from './context';

function App() {
  return (
    <ContextProvider>
      <Router>
        {/* A bootstrap navigation bar */}
        <nav className="navbar navbar-expand-lg bg-dark text-white navbar-dark">
          <Link to="/" className="navbar-brand">Florance</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collpase navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/resume" className="nav-link">Resume</Link>
              </li>
              <li className="navbar-item">
                <Link to="/portfolio" className="nav-link">Portfolio</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
              <li className="navbar-item">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        {/* Component Section */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup}/>
          <ProtectedRoute path="/list" component={ListOfEntries} />
          <Route component={Default} />
        </Switch>

      </Router>
    </ContextProvider>
  );
}

export default App;
