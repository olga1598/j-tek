import React from "react";
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome"
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Attorneys from "./components/Attorneys/Attorneys";
import Contacts from "./components/Contacts/Contacts";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import Privacy from "./components/Privacy/Privacy";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Footer from "./components/Footer/Footer";
import DetailedBio from "./components/DetailedBio/DetailedBio";

function App() {
  return (
    <BrowserRouter>
      <Navbar /> 
        <Switch>
          <Route path="/" component={Welcome} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/attorneys" component={Attorneys} exact/>
          <Route path="/contacts" component={Contacts} exact/>
          <Route path="/disclaimer" component={Disclaimer} exact/>
          <Route path="/privacy" component={Privacy} exact/>
          <Route exact path="/attorneys/:id" component={DetailedBio} />
          <Route component={NotFoundPage} exact/>       
        </Switch>  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
