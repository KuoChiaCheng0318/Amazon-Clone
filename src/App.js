import React, { useEffect } from "react";
import './App.css';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout"
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

const promise = loadStripe(
  'pk_test_51KW9YCKvzzXA13CPMsm7Rg0RN5LEFcXNatyoFgoaluGRoKHCrVHsRGF5236m4NPERbAhEaEpO0cWgL0Hp4oBqO0i00XGEq0Lio'
  );


function App() {
  const [{user},dispatch]= useStateValue();

  //useEffect<<<<<<< POWERFUL
  //Piece of code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //the user is logged in...
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else{
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      // Any cleanup operations go in here...
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
