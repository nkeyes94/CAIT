import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import SignUp from "./pages/SignUp.js";
import Dashboard from "./pages/Dashboard";
import SignUpByEmail from './pages/SignUpByEmail'

//Blank Pages
import Registration from "./pages/Registration.js";
import SignIn from "./pages/SignIn.js";
import FaceRecognition from "./pages/FaceRecognition.js";
import TodoPage from "./pages/TodoPage.js";

import API from "./utils/API";


// import { Helmet } from 'react-helmet';
// import component using helmet
import './App.css';

function App() {
  const signUpUser = async (credentials) => {
    try {
      const response = await API.registerUser(credentials)
      console.log(response)
    } catch (err) {
    
    }
  }
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" render = {(props) =>
            <SignUp
              {...props} signUpUser={signUpUser}
            />
          }/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/signupbyemail" component={SignUpByEmail} />
          {/* Routes to Blank Pages */}
          <Route exact path="/registration" component={Registration} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/facerecognition" component={FaceRecognition} />
          <Route exact path="/todopage" component={TodoPage} />
        </Switch>
   
      </div>
    </Router>
  );
}

export default App;

