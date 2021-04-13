import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListCandidateComponent from './components/ListCandidateComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateCandidateComponent from './components/CreateCandidateComponent';
import UpdateCandidateComponent from './components/UpdateCandidateComponent';
import ViewCandidateComponent from './components/ViewCandidateComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListCandidateComponent}></Route>
                          <Route path = "/candidates" component = {ListCandidateComponent}></Route>
                          <Route path = "/add-candidate/:id" component = {CreateCandidateComponent}></Route>
                          <Route path = "/view-candidate/:id" component = {ViewCandidateComponent}></Route>
                          <Route path = "/update-candidate/:id" component = {UpdateCandidateComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>

  );
}

export default App;