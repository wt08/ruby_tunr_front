import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Switch } from "react-router-dom";
import HomePage from './components/HomePage'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
