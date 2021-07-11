import React from "react";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";


const App: React.FC = () => {



  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route  path='/' exact>
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/projects'>
              <Projects/>
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
