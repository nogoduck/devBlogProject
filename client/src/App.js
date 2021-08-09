import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './layouts';
import ExamplePage from './pages/ExamplePage';

import React from 'react';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/menu/:menu" component={LandingPage} />
        <Route path="/ex" component={ExamplePage} />
      </Router>
    </>
  );
}

export default App;
