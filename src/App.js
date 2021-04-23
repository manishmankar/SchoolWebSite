import "./App.css";
import NavBar from "./Container/NavBar/NavBar";
import NavBefore from "./Container/NavBefore/NavBefore";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Container/Home/Home";
import Footer from "./Container/Footer/Footer";
import SideBar from "./Container/SideBar/SideBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBefore />
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
