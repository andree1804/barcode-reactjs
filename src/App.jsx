/*import React from "react";

export const App = () => {
  return (
    <div>
      <h2>App component!</h2>
    </div>
  );
};

export default App;*/

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Qr from './Components/Qr';

class App extends Component {
    render() {
      return (
        <Router>
            <main className="App container">
              asdasdasdas
              <Switch>
                  <Switch>
                    <Route exact path="/qr" component={ Qr } />
                  </Switch>
                  <div className="container">
                  </div>
              </Switch>
            </main>
        </Router>
      )
    }
  }
  
  export default App;