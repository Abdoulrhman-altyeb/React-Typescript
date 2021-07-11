import React from "react";
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from "./Pages/Home";


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
            
          </Route>
          <Route>
            
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App;
