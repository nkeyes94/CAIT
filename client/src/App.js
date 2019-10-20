import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import ManualLogin from "./pages/ManualLogin";
import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
// import ReactPlayer from 'react-player'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/manualLogin" component={ManualLogin} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;

