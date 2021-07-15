import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import Auth from "./hoc/auth";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/profile" component={Auth(LandingPage, false)} />
        <Route path="/menu/:menu" component={LandingPage} />
      </Router>
    </>
  );
}

export default App;
