import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />
        <Route path="/menu/:menu" component={LandingPage} />
      </BrowserRouter>
    </>
  );
}

export default App;
