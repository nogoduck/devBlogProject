import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ExamplePage from './pages/ExamplePage';

import Auth from './hoc/auth';

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/setting" component={Auth(LandingPage, false)} />
        <Route path="/menu/:menu" component={LandingPage} />
        <Route path="/ex" component={ExamplePage} />
      </Router>
    </>
  );
}

export default App;
