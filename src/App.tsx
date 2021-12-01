import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Index2021 from './routes/2021';
import Year2021Day1 from './routes/2021/day1';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/2021" component={Index2021} />
        <Route path="/2021-day1" component={Year2021Day1} />
      </Switch>
    </Router>
  );
}

export default App;
