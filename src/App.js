import './App.css';
import React,{useState} from 'react';
import NavBar from './Components/NavBar';
import CoinsList from './Components/CryptoCurrenciesList';
import {BrowserRouter, Route,Switch}  from "react-router-dom";
import DisplayCurrency from "./Components/DisplayCurrency";
import {BaseProvider,TimePeriodProvider}  from './Components/BaseContext';
import ChangeBase from './Components/ChangeBase';

function App() {    

  return (
    <div  className="App" className="CoinDetails">
       <BrowserRouter>
      <NavBar/>
      <br/> <br/> <br/> <br/> <br/> 
      <BaseProvider><TimePeriodProvider>
      <ChangeBase/>
      <Switch>
        <Route exact 
        path ="/" 
        render={(props) => <CoinsList {...props} />} />
        <Route
        path ="/:id" exact
         component={DisplayCurrency} />
      </Switch>
      </TimePeriodProvider></BaseProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
