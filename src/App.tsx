import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage";

const App: React.FC = () => {
  return (
    <div className="app">
      <Switch>
        <Route component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
