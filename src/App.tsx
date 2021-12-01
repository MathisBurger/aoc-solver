import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Index2021 from './routes/2021';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/2021" component={Index2021} />
      </Switch>
    </Router>
  );
}

export default App;
