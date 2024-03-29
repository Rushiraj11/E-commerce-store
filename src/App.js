import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components";
import styled from "styled-components";
// import Testing from './Testing'
import {
  Home,
  About,
  Products,
  Error,
  SingleProduct,
  Cart,
  Checkout,
  PrivateRoute,
} from "./pages/index";

function App() {
  return (
    // <div>
    //   <h4>comfy sloth starter</h4>
    //   {/* <Testing /> */}
    //   <Home />
    // </div>
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id" children={<SingleProduct />}>
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route  path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
