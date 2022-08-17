import React, { Component } from "react";
import "./App.css";
import Homepage from "./homepage";
import { Route } from "react-router-dom";
import { BrowserRouter, Routes } from "react-router-dom";
import Bill from "./cartsection/bill";
import { Provider } from "react-redux";
import store from "./store/store";
class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Routes>
          <Route index element={<Provider store={store}><Homepage/></Provider>}/>
          <Route path="bill" element={<Bill/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
