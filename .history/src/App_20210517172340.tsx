import React from "react";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";


const App: React.FC = () => {



  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route>
            <Contact />
          </Route>
          <Route>
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
