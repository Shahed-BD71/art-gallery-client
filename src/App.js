import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ProductDetails from './components/Shop/ProductDetails/ProductDetails';
import AddProduct from "./components/AddProduct/AddProduct/AddProduct";
import AddArtist from "./components/AddArtist/AddArtist";
import AllProduct from "./components/Shop/AllProduct/AllProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/:id">
          <ProductDetails></ProductDetails>
        </Route>
        <Route exact path="/addproduct">
          <AddProduct/>
        </Route>
        <Route exact path="/allproduct">
          <AllProduct/>
        </Route>
      </Switch>
      <Route exact path="/addartist">
          <AddArtist/>
      </Route>
  </Router>
  );
}

export default App;
