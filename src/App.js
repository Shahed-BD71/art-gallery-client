import React from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import { createContext, useState} from "react";
import Home from "./components/Home/Home/Home";
import ProductDetails from './components/Shop/ProductDetails/ProductDetails';
import AddProduct from "./components/AddProduct/AddProduct/AddProduct";
import AddArtist from "./components/AddArtist/AddArtist";
import AllProduct from "./components/Shop/AllProduct/AllProduct";
import Login from "./components/Login/Login/Login";
import Order from './components/Order/Order/Order';
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import Shipment from "./components/Shop/Shipment/Shipment";
import AllOrder from './components/AllOrder/AllOrder/AllOrder'
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import NotFound from './NotFound'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser, cartItems] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, cartItems]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id">
            <ProductDetails></ProductDetails>
          </Route>
          <PrivateRoute exact path="/addproduct">
            <AddProduct/>
          </PrivateRoute>
          <Route exact path="/catalog">
            <AllProduct/>
          </Route>
          <PrivateRoute exact path="/addartist">
            <AddArtist/>
          </PrivateRoute>
          <PrivateRoute exact path="/shipment">
            <Shipment/>
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute exact path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute exact path="/allorder">
            <AllOrder></AllOrder>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
