import "./App.css";
import NavBar from "./Container/NavBar/NavBar";
import NavBefore from "./Container/NavBefore/NavBefore";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import SchoolAdmission from "./Container/Home/SchoolAdmission/SchoolAdmission";
import Home from "./Container/Home/Home";
import Footer from "./Container/Footer/Footer";
import SideBar from "./Container/SideBar/SideBar";
import Gallary from "./Container/Gallary/Gallary";
import EventsC from "./Container/EventsC/EventsC";
import Inquiry from "./Container/Inquiry/Inquiry";
import ContactUS from "./Container/ContactUS/ContactUS";
import Facilities from "./Container/Facilities/Facilities";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBefore />
        <NavBar />
        <SideBar />
        <Switch>
          <Route path="/contact">
            <ContactUS />
          </Route>

          <Route path="/inquiry">
            <Inquiry />
          </Route>

          <Route path="/event">
            <EventsC />
          </Route>
          <Route path="/facilities">
            <Facilities />
          </Route>
          <Route path="/gallary">
            <Gallary />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <SchoolAdmission />

        <Footer />
      </div>
    </Router>
  );
}

export default App;
