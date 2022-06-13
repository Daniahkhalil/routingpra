import React from "react";
import {
  Route,
  BrowserRouter,
  Switch,
  Link 
} from "react-router-dom";
import Welcome from "./components/Welcome";

import Hello from "./components/Hello";
import Hellowithcolors from "./components/Hellowithcolors";

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route  path="/home">
        <Welcome />
      </Route>
      <Route  path="/:word">
        <Hellowithcolors />
        </Route>

      <Route exact path="/:word/:color/:bgColor">
        <Hellowithcolors />
        </Route>

  

      <Route path="/hello">
        <Hello />
      </Route>

 
    </Switch>
  </BrowserRouter>
  );
}

export default App;
