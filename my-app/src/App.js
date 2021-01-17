import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import asyncComponent from './hoc/asyncComponent/asyncComponent'

import Layout from "./hoc/Layout/Layout";
import classes from "./App.module.css";


const asyncReservation=asyncComponent(()=>{
  return import("./containers/ReservationPage/ReservationPage");
}) 

const asyncAbout=asyncComponent(()=>{
  return import("./containers/AboutPage/AboutPage");
})

const asyncContact=asyncComponent(()=>{
  return import("./containers/ContactPage/ContactPage");
})

function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Switch>
          <Route path="/contact" component={asyncContact} />
          <Route path="/aboutus"  component={asyncAbout} />
          <Route path="/" exact component={asyncReservation} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
