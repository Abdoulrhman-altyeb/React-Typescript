import React from "react";
import NavBar from './components/NavBar';
import { Route, Switch, useHistory } from 'react-router-dom'
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import { useEffect } from "react";


const App: React.FC = () => {

  const history = useHistory();
  const handelPush = () => {
    history.push('/')
  }

  useEffect(() => {
    handelPush();
  })


  return (
    <>
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
    </>
  )
}

export default App;
